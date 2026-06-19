import clsx from 'clsx';
import { ChevronRight, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router';

import { sideMenuGroups } from '../mock/menu-data';

type LayoutSidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

const LayoutSidebar = ({ collapsed, onToggle }: LayoutSidebarProps) => {
  const { pathname } = useLocation();

  return (
    <aside
      className={clsx(
        'flex shrink-0 flex-col transition-[width] duration-200',
        collapsed ? 'w-16' : 'w-52',
      )}
    >
      <nav className="flex-1 overflow-y-auto px-2 py-3">
        {sideMenuGroups.map((group) => (
          <div key={group.key} className="mb-2">
            {group.title && !collapsed && (
              <div className="px-3 py-1.5 text-xs text-gray-400">{group.title}</div>
            )}
            {group.title && collapsed && <div className="mx-3 my-2 border-t border-gray-100" />}
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = pathname === item.path;
                return (
                  <li key={item.key}>
                    <Link
                      to={item.path}
                      title={collapsed ? item.name : undefined}
                      className={clsx(
                        'flex items-center rounded-lg text-sm transition-colors',
                        collapsed ? 'justify-center px-0 py-2' : 'gap-2 px-3 py-2',
                        active
                          ? 'bg-primary/10 font-medium text-primary'
                          : 'text-gray-600 hover:bg-gray-100',
                      )}
                    >
                      <span className="flex size-[18px] items-center justify-center text-base">
                        {item.icon}
                      </span>
                      {!collapsed && (
                        <>
                          <span className="flex-1 truncate">{item.name}</span>
                          {item.hasArrow && <ChevronRight className="size-4 text-gray-400" />}
                        </>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="shrink-0 border-t border-gray-100 p-2">
        <button
          type="button"
          aria-label={collapsed ? '展开菜单' : '折叠菜单'}
          onClick={onToggle}
          className={clsx(
            'flex w-full items-center rounded-lg px-3 py-2 text-gray-500 transition-colors hover:bg-gray-100',
            collapsed && 'justify-center px-0',
          )}
        >
          {collapsed ? (
            <PanelLeftOpen className="size-[18px]" />
          ) : (
            <PanelLeftClose className="size-[18px]" />
          )}
        </button>
      </div>
    </aside>
  );
};

export default LayoutSidebar;
