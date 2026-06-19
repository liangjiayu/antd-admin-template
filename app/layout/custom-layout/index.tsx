import { useState } from 'react';
import { Outlet } from 'react-router';

import AccessControl from '@/components/access-control';
import useTitleUpdater from '@/hooks/use-title-updater';

import LayoutHeader from './components/layout-header';
import LayoutSidebar from './components/layout-sidebar';

const CustomLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  useTitleUpdater();

  const toggleSidebar = () => setCollapsed((v) => !v);

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <LayoutHeader onToggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <LayoutSidebar collapsed={collapsed} onToggle={toggleSidebar} />
        <main className="flex-1 overflow-auto p-4">
          <AccessControl>
            <Outlet />
          </AccessControl>
        </main>
      </div>
    </div>
  );
};

export default CustomLayout;
