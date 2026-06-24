import type { ReactNode } from 'react';

export type MenuLeaf = {
  key: string;
  path: string;
  name: string;
  icon?: ReactNode;
};

export type MenuGroup = {
  key: string;
  title?: string;
  items: MenuLeaf[];
};

export type TopNavItem = {
  key: string;
  name: string;
  path: string;
};
