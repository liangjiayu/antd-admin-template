## 技术栈

- **框架**：React 19 + React Router 7
- **UI 组件**：Ant Design 6 + Ant Design Pro Components
- **样式**：Tailwind CSS 4
- **服务端状态**：TanStack Query 5
- **客户端状态**：Zustand 5
- **HTTP 请求**：axios
- **接口生成**：@umijs/openapi
- **图标**：Ant Design Icons + lucide-react（优先）
- **代码规范**：oxlint + oxfmt
- **包管理**：pnpm

## 目录结构

> 仅说明各目录职责，具体文件以实际为准。

```
app/
├── root.tsx      应用根组件，挂载全局 Provider 与布局
├── routes.ts     路由集中注册，新增页面需在此登记
├── routes/       页面，按路由组织
├── layout/       布局：pro-layout / blank-layout / custom-layout
├── components/   跨页面复用组件
├── services/     接口函数，由 swagger 生成，禁止手改
├── store/        Zustand 全局状态
├── hooks/        全局复用 hooks
├── utils/        工具函数（cn、request、query-client 等）
├── constants/    全局常量、枚举
├── types/        全局类型声明
└── styles/       全局样式与 Tailwind 入口
config/           主题、偏好、openapi 生成等项目配置
```

## 编码行为准则

**权衡：** 本准则倾向于"谨慎优于速度"。对于简单任务，请自行判断。

### 先思考再编码

- 不确定时提问，不默默假设；存在多种理解时逐一列出而非默默选择
- 有更简单的方案时直接说明，有不清楚的地方先停下来提问

### 简洁优先

- 不实现超出需求的特性，不为仅使用一次的代码做抽象
- 不处理不可能发生的错误场景

### 精准改动

- 只改必须改的，不"改善"相邻代码、注释或格式
- 发现无关废弃代码提出来而非直接删除
- 移除因改动而孤立的 import/变量/函数

## 开发规范

### 数据请求规范

- 接口函数由 swagger 自动生成于 `app/services`，统一从 `@/services` 引入，生成目录禁止手改
- 请求错误已全局统一提示，业务代码无需重复 try/catch 弹错
- 按场景选择数据获取方案：
  - **简单请求**：一次性拉取、无缓存诉求，用 ahooks 的 `useRequest`
  - **需要缓存**：跨组件共享、自动刷新、统一失效，用 TanStack Query
  - **ProTable 列表**：直接用其内置 `request`

### 样式规范

- 优先使用 Tailwind 原子类编写样式，避免新增 CSS 文件
- 拼接 className 统一使用 `cn`（`app/utils`），支持条件类名并自动合并冲突类
- 仅在 Tailwind 无法表达时（如动态计算值）才使用内联 `style`

### 注释规范

- 默认不写注释：业务组件、页面、常规逻辑均无需注释，代码本身应做到自解释
- 仅以下两类建议写注释：
  - **辅助/工具函数**：说明其用途，让人无需读实现就能知道何时该用
  - **常量与枚举映射**：说明其用途与代表的业务含义
- 杜绝复述代码的废话注释；注释只解释「为什么」，不解释「做了什么」

### 提交规范

- 优先使用中文，commit 内容控制在一句话说明
- 描述可选；改动较多时标题抓重点，描述用列表展开，小改动可忽略
- 如果暂存区有内容，则优先提交暂存区的文件
- 如果用户没有明确要求 push 代码，则不要自动执行 push
- 格式：`<type>: <简要说明>`
- type 取值如下：
  - **feat**: 新功能
  - **fix**: 修复 Bug
  - **refactor**: 重构（非新功能、非修复）
  - **style**: 样式调整（不影响逻辑）
  - **chore**: 构建、依赖、配置等杂项变更
  - **docs**: 文档变更
