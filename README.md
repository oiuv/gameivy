# 游戏常春藤 GameIvy

[gameivy.com](https://gameivy.com/) 是游戏与技术社区的静态门户。它提供魔兽世界、云端千年、魔力宝贝、我的世界和文字 MUD 的入口，也收录服务端部署资料以及涵盖编译、部署和维护的 AI指南。

网站使用 HTML、CSS 和原生 JavaScript，无需数据库、后端服务或构建步骤。

## 本地预览

在项目根目录启动任意静态 HTTP 服务器。例如，已安装 Python 3 时运行：

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

在浏览器打开 [http://127.0.0.1:8000/](http://127.0.0.1:8000/)。本地 `downloads/` 保存下载包，Git 已忽略这个目录。从 Git 克隆后，可在本地放入相应文件，或通过线上网站测试下载。

## OSS 部署

| 项目 | 配置 |
| --- | --- |
| 网站 | `https://gameivy.com/` |
| Bucket | `gameivy` |
| `ossutil --region` | `rg-china-mainland` |
| OSS Endpoint | `https://oss-rg-china-mainland.aliyuncs.com` |
| 默认首页 | `index.html` |
| 错误页 | `404.html`，HTTP 404 |
| 下载对象前缀 | `downloads/` |

部署时只上传本次变更的站点页面和资源。站点文件包括 `index.html`、`404.html`、`about.html`、`ai.html`、`wow.html`、`1000y.html`、`crossgate.html`、`minecraft.html`、`mud.html`、`gameivy.css`、`gameivy.js` 和 `gameivy-valley.jpg`。下载包按需单独上传到 `downloads/` 前缀，并通过 `gameivy.com` 提供下载。

`README.md`、`AGENTS.md`、`.gitignore`、`.git/` 和其他 Git 配置仅用于仓库管理。部署采用逐文件上传，**不要同步整个项目目录到 OSS**。

例如，在已经配置好阿里云凭据的环境中发布魔兽世界页：

```powershell
ossutil cp .\wow.html oss://gameivy/wow.html --force `
  --region rg-china-mainland `
  --endpoint https://oss-rg-china-mainland.aliyuncs.com `
  --content-type 'text/html; charset=utf-8' `
  --cache-control 'no-cache'
```

修改下载入口时，先上传并验证下载包，再发布链接所在页面。发布后用自定义域名检查页面能否打开、下载是否可用，以及 404 页是否返回正确状态码。
