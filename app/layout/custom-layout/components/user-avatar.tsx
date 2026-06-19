import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router';

import { useGlobalStore } from '@/store';

const UserAvatar = () => {
  const currentUser = useGlobalStore((s) => s.currentUser);
  const navigate = useNavigate();

  const loginOut = () => {
    const { search, pathname } = window.location;
    const searchParams = new URLSearchParams({ redirect: pathname + search }).toString();
    if (pathname !== '/user/login') {
      navigate({ pathname: '/user/login', search: searchParams });
    }
  };

  const items: MenuProps['items'] = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      onClick: loginOut,
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['hover']} placement="bottomRight">
      <button
        type="button"
        className="flex h-8 items-center gap-1.5 rounded-lg px-1.5 transition-colors hover:bg-gray-100"
      >
        {currentUser?.avatar ? (
          <img src={currentUser.avatar} alt="avatar" className="size-7 rounded-full object-cover" />
        ) : (
          <span className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-primary">
            <UserOutlined />
          </span>
        )}
        <span className="max-w-24 truncate text-sm text-gray-700">
          {currentUser?.name ?? '未登录'}
        </span>
      </button>
    </Dropdown>
  );
};

export default UserAvatar;
