import { useEffect } from 'react';

function useCustomBack(customBack: () => void) {
  const browserPreventEvent = (event: () => void) => {
    history.pushState(null, '', location.href);
    event();
  };

  useEffect(() => {
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', () => {
      browserPreventEvent(customBack);
    });
    return () => {
      window.removeEventListener('popstate', () => {
        browserPreventEvent(customBack);
      });
    };
  }, [customBack]);
}

export default useCustomBack;
