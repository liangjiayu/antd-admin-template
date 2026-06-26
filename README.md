<h1 align="center">Antd Admin Template</h1>

<div align="center">

开箱即用的现代中后台模板，基于 React 19、Ant Design 6 等最新技术栈。内置 AI 编码规范，让 AI 辅助开发也能产出一致、可控的代码。

[![](https://badgen.net/badge/icon/Ant%20Design?icon=https://gw.alipayobjects.com/zos/antfincdn/Pp4WPgVDB3/KDpgvguMpGfqaHPjicRK.svg&label)](https://ant.design/)
[![](https://badgen.net/static/Build%20with/Vite/blue)](https://vite.dev)
[![](https://badgen.net/static/Linted%20with/oxlint/blue)](https://oxc.rs)

![](http://cdn.liangjiayu.cn/images/admin-preview.png)

![](http://cdn.liangjiayu.cn/images/admin-preview-dark.png)

</div>

## 特性

- 🚀 最新技术栈：基于 React 19、React Router 7、Ant Design 6、Tailwind CSS 4 等主流技术栈。
- 🤖 AI 友好：内置开发规范与示例代码，让 AI 辅助开发更顺畅、产出更可控。
- 🎨 现代布局：内置多套布局，符合现代审美，覆盖大部分中后台场景；自定义布局纯 Tailwind 编写，可 100% 自由定制，支持亮 / 暗主题切换。
- 🔐 权限管理：内置轻量权限方案，支持路由级与按钮级控制，结构清晰、易于扩展。
- 🔗 接口生成：基于 swagger 协议一键生成接口函数，减少重复工作。
- 📋 代码规范：内置 oxlint + oxfmt，提供开箱即用的代码检查与格式化。
- ⚡️ Vite：现代化的前端构建工具，快速冷启动，瞬间热更新。

## 技术栈

| 分类       | 选型                                     |
| ---------- | ---------------------------------------- |
| 框架       | React 19 + React Router 7                |
| UI 组件    | Ant Design 6 + Ant Design Pro Components |
| 样式       | Tailwind CSS 4                           |
| 服务端状态 | TanStack Query 5                         |
| 客户端状态 | Zustand 5                                |
| HTTP 请求  | axios                                    |
| 接口生成   | @umijs/openapi                           |
| 图标       | Ant Design Icons + lucide-react          |
| 代码规范   | oxlint + oxfmt                           |
| 构建工具   | Vite                                     |
| 包管理     | pnpm                                     |

## 快速开始

> 环境要求：Node.js >= 20

**1. 创建项目**

```bash
npx tiged liangjiayu/antd-admin-template my-admin
cd my-admin
```

**2. 安装依赖**

```bash
# 启用 corepack，自动匹配 pnpm 版本
corepack enable
pnpm install
```

**3. 启动开发**

```bash
# 启动开发服务器
pnpm dev
# 构建生产包
pnpm build
# 根据 swagger 生成接口函数
pnpm openapi
```

## 浏览器支持

现代浏览器。

<!-- prettier-ignore -->
| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --- | --- | --- | --- |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 参与贡献

欢迎任何类型的贡献，以下是您可以为该项目做出贡献的一些示例：

- 在日常工作中使用 Antd Admin Template。
- 通过 [Issue](https://github.com/liangjiayu/antd-admin-template/issues) 报告 bug 或提出问题。
- 提交 [Pull Request](https://github.com/liangjiayu/antd-admin-template/pulls) 改进 项目 的代码。
