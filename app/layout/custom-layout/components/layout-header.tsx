import clsx from 'clsx';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router';

import { SITE_APP_TITLE, SITE_LOGO_URL } from '@/constants';

import { topNavItems } from '../menu-config';
import HeaderActions from './header-actions';

type LayoutHeaderProps = {
  onToggleSidebar: () => void;
};

const LayoutHeader = ({ onToggleSidebar }: LayoutHeaderProps) => {
  const { pathname } = useLocation();

  const isNavActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <header className="flex h-14 shrink-0 items-center px-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="折叠菜单"
          onClick={onToggleSidebar}
          className="flex size-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100"
        >
          <Menu className="size-5" />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <img src={SITE_LOGO_URL} alt="logo" className="size-7" />
          <span className="text-base font-semibold text-gray-900">{SITE_APP_TITLE}</span>
        </Link>
      </div>

      <nav className="ml-8 flex items-center gap-1">
        {topNavItems.map((item) => (
          <Link
            key={item.key}
            to={item.path}
            className={clsx(
              'flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm transition-colors',
              isNavActive(item.path)
                ? 'font-medium text-gray-900'
                : 'text-gray-500 hover:text-gray-900',
            )}
          >
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="ml-auto">
        <HeaderActions />
      </div>
    </header>
  );
};

export default LayoutHeader;
