import type { MenuDataItem } from '@ant-design/pro-components';
import { House, LayoutGrid, Table2, TriangleAlert } from 'lucide-react';

const Side_Menu_Config: MenuDataItem[] = [
  {
    path: '/',
    name: '首页',
    icon: <House />,
  },
  {
    path: '/table-list',
    name: '表格列表',
    icon: <Table2 />,
  },
  {
    path: '/card-list',
    name: '卡片列表',
    icon: <LayoutGrid />,
  },
  {
    path: '/exception',
    name: '异常页',
    icon: <TriangleAlert />,
    children: [
      {
        path: '/exception/403',
        name: '403',
      },
      {
        path: '/exception/404',
        name: '404',
      },
      {
        path: '/exception/500',
        name: '500',
      },
    ],
  },
];

export default Side_Menu_Config;
