import { useEffect } from 'react';

import isMobile from '@/utils/isMoblie';

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void,
  exceptRef?: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (exceptRef?.current?.contains(event.target as Node)) {
        return;
      }
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    const eventType = isMobile() ? 'touchstart' : 'mousedown';

    document.addEventListener(eventType, handleClickOutside);
    return () => {
      document.removeEventListener(eventType, handleClickOutside);
    };
  }, [ref, handler, exceptRef]);
};

export default useClickOutside;
