import { useState } from 'react';
import { useEventListener } from 'components/hooks';

const useDraggable = (element: Element | null, startingPosition: System.Coordinates) => {
  const [startPosition, setStartPosition] = useState<System.Coordinates>({ x: 0, y: 0 });
  const [position, setPosition] = useState<System.Coordinates>(startingPosition);

  useEventListener<React.DragEvent>(
    'drag',
    e => {
      if (e.pageX !== 0 && e.pageY !== 0) {
        setPosition({ x: e.pageX - startPosition.x, y: e.pageY - startPosition.y });
      }
    },
    element,
  );
  useEventListener<React.DragEvent>(
    'dragstart',
    e => {
      setStartPosition({ x: e.pageX - position.x, y: e.pageY - position.y });
      const div = document.createElement('div');
      e.dataTransfer.setDragImage(div, 0, 0);
      return false;
    },
    element,
  );

  useEventListener<React.DragEvent>(
    'dragend',
    e => {
      setPosition({ x: e.pageX - startPosition.x, y: e.pageY - startPosition.y });
    },
    element,
  );

  return [position];
};

export default useDraggable;
