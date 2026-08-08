# 安装 zcode.cjs

仓库中为压缩包以减小体积：

- 文件：`files/glm/zcode.cjs.gz`

解压后覆盖：

```powershell
# 需要有 gzip 或 7zip；PowerShell 示例：
$gz = "zcode.cjs.gz"   # 下载到本地后
$out = "D:\ZCode\resources\glm\zcode.cjs"
$in = [IO.File]::OpenRead((Resolve-Path $gz))
$gzip = New-Object IO.Compression.GZipStream($in, [IO.Compression.CompressionMode]::Decompress)
$fs = [IO.File]::Create($out)
$gzip.CopyTo($fs)
$fs.Close(); $gzip.Close(); $in.Close()
```

完整流程见根目录 README。