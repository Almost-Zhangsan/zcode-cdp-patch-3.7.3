# ZCode 3.7.3 CDP 补丁（方案 A）

在 **ZCode Desktop 3.7.3** 内嵌浏览器（IAB）上增加主机命令 `method: "cdp"`，模型可通过 `tab.cdp.*` / `tab.openDevTools()` 做断点调试、事件读取、打开 DevTools 等。

---

## 目录结构

```
files/
  glm/zcode.cjs
  plugin/scripts/browser-client.mjs
  plugin/docs/api.json
  asar-patches/out/
    main/index.js
    main/chunk-PWHDRJIQ.js
    host/chunk-VMEOUWWD.js
```

| 文件 | 作用 |
|------|------|
| `zcode.cjs` | Broker：schema 放行 `method=cdp`，错误回包对齐请求 id |
| `browser-client.mjs` | 模型侧 `tab.cdp` / `openDevTools` API |
| `api.json` | 文档清单，便于 `documentation()` 发现接口 |
| `asar-patches/...` | Electron asar 内 Main/Host 执行桥与 schema |

---

## 本机替换路径（示例）

| 源（本仓库） | 目标 |
|--------------|------|
| `files/glm/zcode.cjs` | `D:\ZCode\resources\glm\zcode.cjs` |
| `files/plugin/scripts/browser-client.mjs` | `%USERPROFILE%\.zcode\cli\plugins\cache\zcode-plugins-official\browser-use\0.2.1\scripts\browser-client.mjs` |
| 同上 | `D:\ZCode\resources\glm\packages\browser-use-plugin\scripts\browser-client.mjs` |
| `files/plugin/docs/api.json` | 上述 `0.2.1\docs\api.json` |
| 同上 | `D:\ZCode\resources\glm\packages\browser-use-plugin\docs\api.json` |
| 按下文打包得到的 `app.asar` | `D:\ZCode\resources\app.asar` |

`%ZCODE%` 以本机安装目录为准（示例为 `D:\ZCode`）。

---

## 打包 app.asar

仅替换 `zcode.cjs` 与 plugin **不够**，还须修改 asar 内 Main/Host。请用官方安装包中的 `app.asar`，解包后覆盖本仓库 3 个补丁 JS，再打包。

### 0. 准备

- Node.js
- **完全退出** ZCode（含托盘）
- 备份：`copy D:\ZCode\resources\app.asar D:\ZCode\resources\app.asar.bak`

### 1. 解包

解包目录旁需能解析 `app.asar.unpacked`（原生模块）：

```powershell
$ZCODE = "D:\ZCode"
$WORK  = "$env:TEMP\zcode-asar-work"
Remove-Item $WORK -Recurse -Force -ErrorAction SilentlyContinue
New-Item $WORK -ItemType Directory | Out-Null
Copy-Item "$ZCODE\resources\app.asar" "$WORK\app.asar"
cmd /c mklink /J "$WORK\app.asar.unpacked" "$ZCODE\resources\app.asar.unpacked"
npx --yes @electron/asar extract "$WORK\app.asar" "$WORK\extracted"
```

### 2. 覆盖补丁 JS

```powershell
# $REPO = 本仓库克隆路径
$PATCH = "$REPO\files\asar-patches"
Copy-Item "$PATCH\out\main\index.js"          "$WORK\extracted\out\main\index.js" -Force
Copy-Item "$PATCH\out\main\chunk-PWHDRJIQ.js" "$WORK\extracted\out\main\chunk-PWHDRJIQ.js" -Force
Copy-Item "$PATCH\out\host\chunk-VMEOUWWD.js" "$WORK\extracted\out\host\chunk-VMEOUWWD.js" -Force
```

### 3. 打包并安装

```powershell
npx --yes @electron/asar pack "$WORK\extracted" "$WORK\app.asar.patched"
Copy-Item "$WORK\app.asar.patched" "$ZCODE\resources\app.asar" -Force
```

### 4. 安装 zcode 与 plugin

```powershell
Copy-Item "$REPO\files\glm\zcode.cjs" "$ZCODE\resources\glm\zcode.cjs" -Force
Copy-Item "$REPO\files\plugin\scripts\browser-client.mjs" `
  "$ZCODE\resources\glm\packages\browser-use-plugin\scripts\browser-client.mjs" -Force
Copy-Item "$REPO\files\plugin\docs\api.json" `
  "$ZCODE\resources\glm\packages\browser-use-plugin\docs\api.json" -Force
$cache = "$env:USERPROFILE\.zcode\cli\plugins\cache\zcode-plugins-official\browser-use\0.2.1"
if (Test-Path $cache) {
  Copy-Item "$REPO\files\plugin\scripts\browser-client.mjs" "$cache\scripts\browser-client.mjs" -Force
  Copy-Item "$REPO\files\plugin\docs\api.json" "$cache\docs\api.json" -Force
}
```

### 5. 验证

启动 ZCode，**新开对话**：

```text
打开 https://www.baidu.com
依次：tab.cdp.evaluate("1+1")、tab.cdp.enableDebugger()、
tab.cdp.events({limit:50})、tab.openDevTools()
```

主机日志 `%USERPROFILE%\.zcode\v2\logs\` 中应出现 `method=cdp` 或 `cdp-bridge`。

---

## 注意

- 仅针对 **3.7.3**（chunk 文件名随版本变化）。
- 使用 `@electron/asar pack` 打包，勿手写 asar 头。
- 勿在 `browser-use\0.2.1` 目录内放置 `.bak`（可能导致插件改名失败、Agent 无法启动）。
- 完整 CDP 权限极高，仅用于你有权调试的目标。