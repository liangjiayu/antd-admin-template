import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

import RegionSelector from './region-selector';
import UserAvatar from './user-avatar';

const HeaderActions = () => {
  return (
    <div className="flex items-center gap-1">
      <RegionSelector />
      <UserAvatar />
      <Link
        to="/user/login"
        className="ml-1 flex h-8 items-center gap-1 rounded-lg bg-primary px-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        <span>登录</span>
        <ArrowUpRight className="size-4" />
      </Link>
    </div>
  );
};

export default HeaderActions;
