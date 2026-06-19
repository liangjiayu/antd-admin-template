import { useEffect, useRef, useState } from 'react';

/** 下拉开合状态：点击容器外部自动关闭 */
export function useDropdown<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  return { ref, open, setOpen, toggle: () => setOpen((v) => !v) };
}
