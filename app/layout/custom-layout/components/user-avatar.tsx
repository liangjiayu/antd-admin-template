import { LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router';

import { useGlobalStore } from '@/store';

import { useDropdown } from '../hooks';

const UserAvatar = () => {
  const currentUser = useGlobalStore((s) => s.currentUser);
  const navigate = useNavigate();
  const { ref, open, setOpen, toggle } = useDropdown();

  const loginOut = () => {
    const { search, pathname } = window.location;
    const searchParams = new URLSearchParams({ redirect: pathname + search }).toString();
    if (pathname !== '/user/login') {
      navigate({ pathname: '/user/login', search: searchParams });
    }
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={toggle}
        className="flex h-8 items-center gap-1.5 rounded-lg px-1.5 transition-colors hover:bg-gray-100"
      >
        {currentUser?.avatar ? (
          <img src={currentUser.avatar} alt="avatar" className="size-7 rounded-full object-cover" />
        ) : (
          <span className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-primary">
            <User className="size-4" />
          </span>
        )}
        <span className="max-w-24 truncate text-sm text-gray-700">
          {currentUser?.name ?? '未登录'}
        </span>
      </button>

      {open && (
        <div className="absolute top-full right-0 z-50 mt-1 w-36 overflow-hidden rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              loginOut();
            }}
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50"
          >
            <LogOut className="size-4" />
            <span>退出登录</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
