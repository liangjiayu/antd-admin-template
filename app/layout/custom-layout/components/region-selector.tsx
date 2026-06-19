import clsx from 'clsx';
import { Check, ChevronDown, MapPin } from 'lucide-react';
import { useState } from 'react';

import { useDropdown } from '../hooks';

/** 区域 mock 列表 */
const REGIONS = ['华北2（北京）', '华东1（杭州）', '华东2（上海）', '华南1（深圳）'];

const RegionSelector = () => {
  const { ref, open, setOpen, toggle } = useDropdown();
  const [current, setCurrent] = useState(REGIONS[0]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={toggle}
        className="flex h-8 items-center gap-1 rounded-lg px-2 text-sm text-gray-600 transition-colors hover:bg-gray-100"
      >
        <MapPin className="size-4 text-gray-400" />
        <span>{current}</span>
        <ChevronDown
          className={clsx('size-4 text-gray-400 transition-transform', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div className="absolute top-full right-0 z-50 mt-1 w-40 overflow-hidden rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
          {REGIONS.map((region) => (
            <button
              key={region}
              type="button"
              onClick={() => {
                setCurrent(region);
                setOpen(false);
              }}
              className={clsx(
                'flex w-full items-center justify-between px-3 py-2 text-left text-sm transition-colors',
                'hover:bg-gray-50',
                region === current ? 'text-primary' : 'text-gray-700',
              )}
            >
              <span>{region}</span>
              {region === current && <Check className="size-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RegionSelector;
