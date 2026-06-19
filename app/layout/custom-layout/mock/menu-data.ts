import {
  AudioLines,
  Bookmark,
  Boxes,
  Database,
  Eye,
  Gauge,
  Key,
  LayoutGrid,
  Shrink,
  SlidersHorizontal,
  Spline,
  Table,
  Type,
  Users,
  Wallet,
} from 'lucide-react';
import { createElement } from 'react';

import type { MenuGroup, TopNavItem } from '../types';

/**
 * 侧栏分组菜单 mock 数据
 * 参考阿里云百炼模型平台，路径为 mock，部分无对应真实页面
 */
export const sideMenuGroups: MenuGroup[] = [
  {
    key: 'overview',
    items: [
      { key: 'model-square', path: '/', name: '模型广场', icon: createElement(LayoutGrid) },
      { key: 'crud-table', path: '/crud-table', name: 'CRUD 表格', icon: createElement(Table) },
    ],
  },
  {
    key: 'experience',
    title: '模型体验',
    items: [
      { key: 'text-model', path: '/model/text', name: '文本模型', icon: createElement(Type) },
      {
        key: 'audio-model',
        path: '/model/audio',
        name: '语音模型',
        icon: createElement(AudioLines),
      },
      { key: 'vision-model', path: '/model/vision', name: '视觉模型', icon: createElement(Eye) },
      { key: 'omni-model', path: '/model/omni', name: '全模态模型', icon: createElement(Boxes) },
      { key: 'vector-model', path: '/model/vector', name: '向量模型', icon: createElement(Spline) },
    ],
  },
  {
    key: 'inference',
    title: '模型推理',
    items: [
      { key: 'tpm', path: '/inference/tpm', name: 'TPM 预留', icon: createElement(Bookmark) },
    ],
  },
  {
    key: 'training',
    title: '模型训练',
    items: [
      { key: 'data', path: '/training/data', name: '数据管理', icon: createElement(Database) },
      {
        key: 'tuning',
        path: '/training/tuning',
        name: '模型调优',
        icon: createElement(SlidersHorizontal),
      },
      {
        key: 'my-models',
        path: '/training/my-models',
        name: '我的模型',
        icon: createElement(Boxes),
      },
      {
        key: 'evaluation',
        path: '/training/evaluation',
        name: '模型评测',
        icon: createElement(Gauge),
      },
      {
        key: 'compression',
        path: '/training/compression',
        name: '模型压缩',
        icon: createElement(Shrink),
      },
    ],
  },
  {
    key: 'workbench',
    title: '工作台',
    items: [
      {
        key: 'usage',
        path: '/workbench/usage',
        name: '用量 & 费用',
        icon: createElement(Wallet),
        hasArrow: true,
      },
      {
        key: 'permission',
        path: '/workbench/permission',
        name: '权限管理',
        icon: createElement(Users),
        hasArrow: true,
      },
      {
        key: 'api-key',
        path: '/workbench/api-key',
        name: 'API Key',
        icon: createElement(Key),
        hasArrow: true,
      },
    ],
  },
];

/** 顶部水平导航 mock 数据 */
export const topNavItems: TopNavItem[] = [
  { key: 'model', name: '模型', path: '/' },
  { key: 'app', name: '应用', path: '/app' },
  { key: 'subscription', name: '订阅', path: '/subscription' },
  { key: 'experience', name: '体验', path: '/experience' },
  { key: 'docs', name: '文档', path: '/docs' },
  { key: 'api', name: 'API 参考', path: '/api-reference' },
];
