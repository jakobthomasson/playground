import { useState, useCallback } from 'react';

function useRefCallback<T>(): [T | null, ((instance: T | null) => void)] {
  const [element, setElement] = useState<T | null>(null);

    const ref = useCallback((node: T | null) => {
      if (node !== null) {
        setElement(node);
      }
    }, []);
  return [element, ref];
}

export default useRefCallback;
