import { useState } from 'react';
import { useEventListener, useInterval } from 'components/hooks';

const useMouseOver = (element: Element | null, delay: number) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useInterval(
    () => {
      setIsDone(true);
      setIsRunning(false);
    },
    isRunning ? delay : null,
  );

  useEventListener(
    'mouseover',
    e => {
      setIsRunning(true);
    },
    element,
  );

  useEventListener(
    'mouseleave',
    e => {
      setIsRunning(false);
      setIsDone(false);
    },
    element,
  );
  return [isDone];
};

export default useMouseOver;
