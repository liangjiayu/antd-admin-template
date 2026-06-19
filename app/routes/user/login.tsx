import {
  AlipayCircleOutlined,
  LockOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { Alert, message } from 'antd';
import type React from 'react';
import { useState } from 'react';

import { SITE_LOGO_URL, ThemeMode } from '@/constants';
import { useGlobalStore } from '@/store/global-store';
import { cn } from '@/utils';

const ActionIcons = ({ isDark }: { isDark: boolean }) => {
  const className = cn(
    'ml-2 cursor-pointer align-middle text-2xl transition-colors hover:text-primary',
    isDark ? 'text-white/45' : 'text-black/45',
  );
  return (
    <>
      <AlipayCircleOutlined key="AlipayCircleOutlined" className={className} />
      <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={className} />
      <WeiboCircleOutlined key="WeiboCircleOutlined" className={className} />
    </>
  );
};

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return <Alert className="mb-6" message={content} type="error" showIcon />;
};

const Login: React.FC = () => {
  const isDark = useGlobalStore((s) => s.themeMode === ThemeMode.Dark);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (_values: {
    username?: string;
    password?: string;
    autoLogin?: boolean;
  }) => {
    try {
      message.success('登录成功！');
      const urlParams = new URL(window.location.href).searchParams;
      window.location.href = urlParams.get('redirect') || '/';
    } catch (error) {
      console.error(error);
      message.error('登录失败，请重试！');
      setHasError(true);
    }
  };

  return (
    <div
      className={cn('flex h-screen flex-col overflow-auto', isDark ? 'bg-black' : 'bg-[#f5f5f5]')}
      style={
        !isDark
          ? {
              backgroundImage:
                "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
              backgroundSize: '100% 100%',
            }
          : undefined
      }
    >
      <div className="flex-1 py-8">
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src={SITE_LOGO_URL} />}
          title="Antd Admin"
          subTitle={'一个基于 React 的中后台管理系统解决方案'}
          initialValues={{
            autoLogin: true,
          }}
          actions={['其他登录方式 :', <ActionIcons key="icons" isDark={isDark} />]}
          onFinish={async (values) => {
            await handleSubmit(values);
          }}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined />,
            }}
            placeholder={'用户名: admin or user'}
            rules={[
              {
                required: true,
                message: '用户名是必填项！',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined />,
            }}
            placeholder={'密码: 123456'}
            rules={[
              {
                required: true,
                message: '密码是必填项！',
              },
            ]}
          />
          {hasError && <LoginMessage content={'错误的用户名和密码(admin/123456)'} />}
          <div className="mb-6">
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a className="float-right">忘记密码 ?</a>
          </div>
        </LoginForm>
      </div>
    </div>
  );
};
export default Login;

export const handle = {
  name: '用户登录',
};
