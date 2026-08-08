# ZCode 3.7.3 CDP 补丁（方案 A）

在 **ZCode Desktop 3.7.3** 内嵌浏览器（IAB）上增加主机命令 `method: "cdp"`，模型可通过 `tab.cdp.*` / `tab.openDevTools()` 做断点调试、事件读取、打开 DevTools 等。

---

## 目录结构

```
files/
  glm/zcode.cjs.gz                 # Broker 补丁（gzip，安装前解压为 zcode.cjs）
  glm/README.md                    # 解压说明
  plugin/scripts/browser-client.mjs
  plugin/docs/api.json
  asar-patches/out/
    main/index.js
    main/chunk-PWHDRJIQ.js
    host/chunk-VMEOUWWD.js
```

| 文件 | 作用 |
|------|------|
| `zcode.cjs.gz` | Broker：schema 放行 `method=cdp`，错误回包对齐 id（解压后使用） |
| `browser-client.mjs` | 模型侧 `tab.cdp` / `openDevTools` |
| `api.json` | 文档清单，便于 `documentation()` 发现接口 |
| `asar-patches/...` | asar 内 Main/Host 执行桥与 schema |

---

## 本机目标路径（示例）

| 源 | 目标 |
|----|------|
| 解压后的 `zcode.cjs` | `D:\ZCode\resources\glm\zcode.cjs` |
| `files/plugin/scripts/browser-client.mjs` | `%USERPROFILE%\.zcode\cli\plugins\cache\zcode-plugins-official\browser-use\0.2.1\scripts\browser-client.mjs` |
| 同上 | `D:\ZCode\resources\glm\packages\browser-use-plugin\scripts\browser-client.mjs` |
| `files/plugin/docs/api.json` | 上述 `0.2.1\docs\api.json` |
| 同上 | `D:\ZCode\resources\glm\packages\browser-use-plugin\docs\api.json` |
| 按下文打包得到的 `app.asar` | `D:\ZCode\resources\app.asar` |

---

## 1. 解压 zcode.cjs

```powershell
# 下载 files/glm/zcode.cjs.gz 后：
$gz  = ".\zcode.cjs.gz"
$out = "D:\ZCode\resources\glm\zcode.cjs"
$in = [IO.File]::OpenRead((Resolve-Path $gz))
$gs = New-Object IO.Compression.GZipStream($in, [IO.Compression.CompressionMode]::Decompress)
$fs = [IO.File]::Create($out)
$gs.CopyTo($fs)
$fs.Close(); $gs.Close(); $in.Close()
```

---

## 2. 打包 app.asar

仅替换 `zcode.cjs` 与 plugin **不够**，还须修改 asar 内 Main/Host。

### 准备

- Node.js；**完全退出** ZCode（含托盘）
- `copy D:\ZCode\resources\app.asar D:\ZCode\resources\app.asar.bak`

### 解包

```powershell
$ZCODE = "D:\ZCode"
$WORK  = "$env:TEMP\zcode-asar-work"
Remove-Item $WORK -Recurse -Force -ErrorAction SilentlyContinue
New-Item $WORK -ItemType Directory | Out-Null
Copy-Item "$ZCODE\resources\app.asar" "$WORK\app.asar"
cmd /c mklink /J "$WORK\app.asar.unpacked" "$ZCODE\resources\app.asar.unpacked"
npx --yes @electron/asar extract "$WORK\app.asar" "$WORK\extracted"
```

### 覆盖补丁 JS

```powershell
# $REPO = 本仓库路径
$P = "$REPO\files\asar-patches"
Copy-Item "$P\out\main\index.js"          "$WORK\extracted\out\main\index.js" -Force
Copy-Item "$P\out\main\chunk-PWHDRJIQ.js" "$WORK\extracted\out\main\chunk-PWHDRJIQ.js" -Force
Copy-Item "$P\out\host\chunk-VMEOUWWD.js" "$WORK\extracted\out\host\chunk-VMEOUWWD.js" -Force
```

### 打包并安装

```powershell
npx --yes @electron/asar pack "$WORK\extracted" "$WORK\app.asar.patched"
Copy-Item "$WORK\app.asar.patched" "$ZCODE\resources\app.asar" -Force
```

---

## 3. 安装 plugin

```powershell
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

---

## 4. 验证

新开对话：

```text
打开 https://www.baidu.com
tab.cdp.evaluate("1+1")、tab.cdp.enableDebugger()、
tab.cdp.events({limit:50})、tab.openDevTools()
```

日志 `%USERPROFILE%\.zcode\v2\logs\` 应出现 `method=cdp` 或 `cdp-bridge`。

---

## 注意

- 仅 **3.7.3**
- 用 `@electron/asar pack` 打包
- 勿在 `browser-use\0.2.1` 内放 `.bak`
- CDP 权限极高，仅用于授权调试