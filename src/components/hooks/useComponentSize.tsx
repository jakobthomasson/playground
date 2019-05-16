import { useCallback, useState, useLayoutEffect } from 'react';
import { ResizeObserver } from 'resize-observer';

//"@rehooks/component-size": "^1.0.2", original

function getDimensions(el: HTMLElement | null): System.Dimensions {
  if (!el) {
    return {
      width: 0,
      height: 0,
    };
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight,
  };
}

function useComponentSize(
  ref: React.RefObject<HTMLElement> | (HTMLElement | null),
  callback?: (dimension: System.Dimensions) => void,
) {
  let element: HTMLElement | null;
  element = ref instanceof HTMLElement ? ref : ref ? ref.current : null;
  let [componentDimension, setComponentSize] = useState<System.Dimensions>(getDimensions(element));

  const handleResize = useCallback(
    function handleResize() {
      if (element) {
        const dimension = getDimensions(element);
        setComponentSize(dimension);
        callback && callback(dimension);
      }
    },
    [element],
  );

  useLayoutEffect(() => {
    if (!element) {
      return;
    }

    handleResize();

    if (typeof ResizeObserver === 'function') {
      let resizeObserver = new ResizeObserver(() => handleResize());
      resizeObserver.observe(element);

      return () => {
        resizeObserver.disconnect();
        // resizeObserver = null;
      };
    } else {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [element]);
  // console.log(ComponentSize);

  return componentDimension;
}

export default useComponentSize;
