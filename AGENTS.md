# GameIvy 项目说明

## 网站维护

- 这是部署在阿里云 OSS Bucket `gameivy` 的纯静态站点，公网域名为 `https://gameivy.com/`。使用现有的 HTML、CSS 和原生 JavaScript。直接编辑相关页面，无需构建或数据库迁移。
- 游戏模块对应 `wow.html`、`1000y.html`、`crossgate.html`、`minecraft.html` 和 `mud.html`。`about.html` 汇总社区入口，`ai.html` 提供编译、部署和运维的 AI指南。
- 复用 `gameivy.css` 和 `gameivy.js`，检查窄屏布局、内部链接、锚点和下载入口。保留页脚备案号 `京ICP备13031296号-2` 及工信部备案系统链接。
- 指向 `gameivy.com` 以外网站的链接使用 `target="_blank"` 和 `rel="noopener"`。站内导航、锚点及本站下载链接沿用默认行为。

## Git 与发布

- `downloads/` 本地下载目录由 Git 忽略。通过用户指定的文件单独更新 OSS 下载对象。
- GitHub 用于管理网站源码和项目文档。OSS 仅接收实际提供给访客的页面、静态资源和下载内容。`README.md`、`AGENTS.md`、`.gitignore`、`.git/` 和其他 Git 配置均不上传。发布时显式列出要上传的文件。
- OSS 的 `--region` 为 `rg-china-mainland`，`--endpoint` 为 `https://oss-rg-china-mainland.aliyuncs.com`。常规内容更新无需修改 DNS、证书或 Bucket 配置。
- 已授权发布时，先验证依赖的资源和下载对象，再上传页面。使用 `https://gameivy.com/` 验证线上结果，HTML 页面应正常显示，下载包应能下载。
