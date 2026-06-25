<h1 align="center">Antd Admin Template</h1>

<div align="center">

面向 AI 开发时代、开箱即用的中后台前端模板。基于 React 19 等最新技术栈，内置 AI 编码规范，让 AI 辅助开发也能产出一致、可控的代码。

[![](https://badgen.net/static/Build%20with/Vite/blue)](https://vite.dev)
[![](https://badgen.net/static/Formatted%20with/oxfmt/blue)](https://oxc.rs)
[![](https://badgen.net/badge/icon/Ant%20Design?icon=https://gw.alipayobjects.com/zos/antfincdn/Pp4WPgVDB3/KDpgvguMpGfqaHPjicRK.svg&label)](https://ant.design/)

![](http://cdn.liangjiayu.cn/images/admin-preview.png)

![](http://cdn.liangjiayu.cn/images/admin-preview-dark.png)

</div>

- [预览基础版本](https://antd-admin-template.vercel.app)
- [预览演示版本](https://antd-admin-template-git-all-blocks-liangjiayus-projects.vercel.app)

## 特性

- 🚀 最新技术栈：基于 React 19、React Router 7、Ant Design 6、Tailwind CSS 4 等主流技术栈。
- 🤖 AI 友好：内置 `CLAUDE.md` 编码规范，约定技术栈、目录结构、数据请求与提交规范，让 Claude Code、Cursor 等 AI 工具开箱即写出风格统一的代码。
- ⚙️ 丰富的配置：企业级中后台前端解决方案，提供丰富的配置和多种布局方式。
- 🎨 主题定制：通过简单的配置，即可实现亮色 / 暗色等主题切换，满足个性化需求。
- 🔐 权限管理：内置权限管理方案，支持多种权限控制方式，满足各种权限需求。
- ⚡️ Vite：现代化的前端构建工具，快速冷启动，瞬间热更新。
- 📋 代码规范：内置 oxlint + oxfmt，提供开箱即用的代码检查与格式化。
- 🔗 接口生成：基于 swagger 协议一键生成接口函数，减少重复工作。

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
| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 参与贡献

欢迎任何类型的贡献，以下是您可以为该项目做出贡献的一些示例：

- 在日常工作中使用 Antd Admin Template。
- 通过 [Issue](https://github.com/liangjiayu/antd-admin-template/issues) 报告 bug 或提出问题。
- 提交 [Pull Request](https://github.com/liangjiayu/antd-admin-template/pulls) 改进 项目 的代码。
