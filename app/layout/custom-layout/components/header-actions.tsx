import ThemeSwitch from './theme-switch';
import UserAvatar from './user-avatar';

const HeaderActions = () => {
  return (
    <div className="flex items-center gap-3">
      <ThemeSwitch />
      <UserAvatar />
    </div>
  );
};

export default HeaderActions;
