import { Tooltip } from 'antd';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router';

import { cn } from '@/utils';

import { findActiveNavKey, sideMenuGroupsMap } from '../menu-config';

type LayoutSidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

const LayoutSidebar = ({ collapsed, onToggle }: LayoutSidebarProps) => {
  const { pathname } = useLocation();
  const groups = sideMenuGroupsMap[findActiveNavKey(pathname)] ?? [];

  return (
    <aside
      className={cn(
        'flex shrink-0 flex-col transition-[width] duration-200',
        collapsed ? 'w-14' : 'w-52',
      )}
    >
      <nav className="flex-1 overflow-y-auto px-2 py-3">
        {groups.map((group) => (
          <div key={group.key} className="mb-2">
            {group.title && !collapsed && (
              <div className="px-3 py-1.5 text-xs text-gray-400 dark:text-gray-500">
                {group.title}
              </div>
            )}
            {group.title && collapsed && <div className="mx-3 my-2 border-t border-border-base" />}
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = pathname === item.path;
                const link = (
                  <Link
                    to={item.path}
                    className={cn(
                      'flex items-center rounded-lg text-sm transition-colors',
                      collapsed ? 'mx-auto size-9 justify-center' : 'gap-2 px-3 py-2',
                      active
                        ? 'bg-fill-active font-medium text-gray-800 dark:text-gray-50'
                        : 'text-gray-600 hover:bg-fill-hover dark:text-gray-300',
                    )}
                  >
                    <span className="flex size-4.5 items-center justify-center text-base">
                      {item.icon}
                    </span>
                    {!collapsed && <span className="flex-1 truncate">{item.name}</span>}
                  </Link>
                );
                return (
                  <li key={item.key}>
                    {collapsed ? (
                      <Tooltip title={item.name} placement="right" arrow={false} destroyOnHidden>
                        {link}
                      </Tooltip>
                    ) : (
                      link
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="shrink-0 p-2">
        <button
          type="button"
          aria-label={collapsed ? '展开菜单' : '折叠菜单'}
          onClick={onToggle}
          className={cn(
            'flex items-center rounded-lg text-gray-500 transition-colors hover:bg-fill-hover dark:text-gray-400',
            collapsed ? 'mx-auto size-9 justify-center' : 'w-full px-3 py-2',
          )}
        >
          {collapsed ? (
            <PanelLeftOpen className="size-4.5" />
          ) : (
            <PanelLeftClose className="size-4.5" />
          )}
        </button>
      </div>
    </aside>
  );
};

export default LayoutSidebar;
