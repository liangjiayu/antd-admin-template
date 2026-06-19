import { Card } from 'antd';

import CustomSvgCase from './components/custom-svg-case';
import LucideCase from './components/lucide-case';

const IconFeature = () => {
  return (
    <div
      className="text-[40px] text-gray-700 dark:text-gray-200"
      style={{ '--icon-case-size': '32px' } as React.CSSProperties}
    >
      <Card title="基础图标">
        <LucideCase />
      </Card>

      <Card title="自定义图标" style={{ marginTop: 40 }}>
        <CustomSvgCase />
      </Card>
    </div>
  );
};

export default IconFeature;

export const handle = {
  name: '图标功能',
};
