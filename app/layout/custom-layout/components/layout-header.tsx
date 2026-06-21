import { Link, useLocation } from 'react-router';

import { SITE_APP_TITLE, SITE_LOGO_URL } from '@/constants';
import { cn } from '@/utils';

import { findActiveNavKey, topNavItems } from '../menu-config';
import HeaderActions from './header-actions';

const LayoutHeader = () => {
  const { pathname } = useLocation();
  const activeNavKey = findActiveNavKey(pathname);

  return (
    <header className="flex h-14 shrink-0 items-center px-4">
      <Link to="/" className="flex items-center gap-2">
        <img src={SITE_LOGO_URL} alt="logo" className="size-7" />
        <span className="text-base font-semibold text-gray-900 dark:text-gray-100">
          {SITE_APP_TITLE}
        </span>
      </Link>

      <nav className="ml-8 flex flex-1 items-center gap-1">
        {topNavItems.map((item) => (
          <Link
            key={item.key}
            to={item.path}
            className={cn(
              'flex items-center gap-1 rounded-lg px-3 py-1.5 text-[15px] transition-colors',
              activeNavKey === item.key
                ? 'font-medium text-gray-900 dark:text-gray-100'
                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100',
            )}
          >
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <HeaderActions />
    </header>
  );
};

export default LayoutHeader;
