import {
  AudioLines,
  Bookmark,
  Bot,
  Boxes,
  CircleHelp,
  Database,
  Eye,
  FileText,
  Gauge,
  Key,
  LayoutGrid,
  LayoutList,
  Rocket,
  Shrink,
  SlidersHorizontal,
  Spline,
  Table,
  Type,
  Users,
  Wallet,
  Workflow,
} from 'lucide-react';

import type { MenuGroup, TopNavItem } from './types';

/** 顶部水平导航 mock 数据 */
export const topNavItems: TopNavItem[] = [
  { key: 'model', name: '模型', path: '/' },
  { key: 'app', name: '应用', path: '/app' },
  { key: 'docs', name: '文档', path: '/docs' },
];

/**
 * 各顶部分区对应的侧栏分组菜单 mock 数据，按 navKey 索引
 * 参考阿里云百炼模型平台，路径为 mock，部分无对应真实页面
 */
export const sideMenuGroupsMap: Record<string, MenuGroup[]> = {
  model: [
    {
      key: 'overview',
      items: [
        { key: 'home', path: '/', name: '首页', icon: <LayoutGrid /> },
        { key: 'table-list', path: '/table-list', name: '表格列表', icon: <Table /> },
        { key: 'card-list', path: '/card-list', name: '卡片列表', icon: <LayoutList /> },
      ],
    },
    {
      key: 'experience',
      title: '模型体验',
      items: [
        { key: 'text-model', path: '/model/text', name: '文本模型', icon: <Type /> },
        { key: 'audio-model', path: '/model/audio', name: '语音模型', icon: <AudioLines /> },
        { key: 'vision-model', path: '/model/vision', name: '视觉模型', icon: <Eye /> },
        { key: 'omni-model', path: '/model/omni', name: '全模态模型', icon: <Boxes /> },
        { key: 'vector-model', path: '/model/vector', name: '向量模型', icon: <Spline /> },
      ],
    },
    {
      key: 'inference',
      title: '模型推理',
      items: [{ key: 'tpm', path: '/inference/tpm', name: 'TPM 预留', icon: <Bookmark /> }],
    },
    {
      key: 'training',
      title: '模型训练',
      items: [
        { key: 'data', path: '/training/data', name: '数据管理', icon: <Database /> },
        { key: 'tuning', path: '/training/tuning', name: '模型调优', icon: <SlidersHorizontal /> },
        { key: 'my-models', path: '/training/my-models', name: '我的模型', icon: <Boxes /> },
        { key: 'evaluation', path: '/training/evaluation', name: '模型评测', icon: <Gauge /> },
        { key: 'compression', path: '/training/compression', name: '模型压缩', icon: <Shrink /> },
      ],
    },
    {
      key: 'workbench',
      title: '工作台',
      items: [
        { key: 'usage', path: '/workbench/usage', name: '用量 & 费用', icon: <Wallet /> },
        { key: 'permission', path: '/workbench/permission', name: '权限管理', icon: <Users /> },
        { key: 'api-key', path: '/workbench/api-key', name: 'API Key', icon: <Key /> },
      ],
    },
  ],
  app: [
    {
      key: 'app',
      items: [
        { key: 'my-apps', path: '/app', name: '我的应用', icon: <LayoutGrid /> },
        { key: 'agent', path: '/app/agent', name: '智能体', icon: <Bot /> },
        { key: 'workflow', path: '/app/workflow', name: '工作流', icon: <Workflow /> },
      ],
    },
  ],
  docs: [
    {
      key: 'docs',
      items: [
        { key: 'quick-start', path: '/docs', name: '快速开始', icon: <Rocket /> },
        { key: 'api-docs', path: '/docs/api', name: 'API 文档', icon: <FileText /> },
        { key: 'faq', path: '/docs/faq', name: '常见问题', icon: <CircleHelp /> },
      ],
    },
  ],
};

/** 根据当前路径定位所属顶部分区 key，未命中则回退到首个分区（模型） */
export function findActiveNavKey(pathname: string): string {
  const matched = topNavItems.find((nav) =>
    sideMenuGroupsMap[nav.key]?.some((group) => group.items.some((item) => item.path === pathname)),
  );
  return matched?.key ?? topNavItems[0].key;
}
