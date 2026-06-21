import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

import { ThemeMode } from '@/constants';
import { useGlobalStore } from '@/store';
import { cn } from '@/utils';

const ThemeSwitch = () => {
  const themeMode = useGlobalStore((s) => s.themeMode);
  const setThemeMode = useGlobalStore((s) => s.setThemeMode);
  const isDarkMode = themeMode === ThemeMode.Dark;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setThemeMode(isDarkMode ? ThemeMode.Light : ThemeMode.Dark);
  };

  return (
    <div
      className={cn(
        'relative flex h-5.5 w-10 cursor-pointer rounded-xl border bg-[#8e96aa24] p-px leading-none hover:border-blue-600',
        isDarkMode ? 'border-[#3c3f44]' : 'border-[#c2c2c4]',
      )}
      onClick={toggleTheme}
    >
      <span
        className={cn(
          'absolute flex h-4.5 w-4.5 flex-col items-center justify-center rounded-full transition-all duration-250',
          isDarkMode ? 'translate-x-4.5 bg-black' : 'bg-white',
        )}
      >
        {isDarkMode ? (
          <MoonOutlined className="text-[11px] text-white" />
        ) : (
          <SunOutlined className="text-[11px] text-[#67676c]" />
        )}
      </span>
    </div>
  );
};

export default ThemeSwitch;
