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
    <div className="flex h-screen flex-col bg-bg-layout">
      <LayoutHeader />
      <div className="flex flex-1 overflow-hidden">
        <LayoutSidebar collapsed={collapsed} onToggle={toggleSidebar} />
        <main className="mr-2 mb-2 flex-1">
          <div className="h-full overflow-auto rounded-xl border border-border-base bg-bg-container p-4">
            <AccessControl>
              <Outlet />
            </AccessControl>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomLayout;
