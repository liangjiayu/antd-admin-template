import type { ReactNode } from 'react';

export type MenuLeaf = {
  key: string;
  /** 跳转路径（mock 数据，部分路径无对应真实页面） */
  path: string;
  name: string;
  icon?: ReactNode;
};

export type MenuGroup = {
  key: string;
  /** 分组标题，省略则不展示标题（如顶部的「模型广场」单项） */
  title?: string;
  items: MenuLeaf[];
};

export type TopNavItem = {
  key: string;
  name: string;
  path: string;
};
