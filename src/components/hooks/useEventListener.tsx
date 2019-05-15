import { useRef, useEffect, EventHandler, SyntheticEvent } from 'react';
// https://developer.mozilla.org/en-US/docs/Web/Events
const useEventListener = <T extends SyntheticEvent<any>>(
  eventName: keyof GlobalEventHandlersEventMap,
  handler: EventHandler<T>,
  element: Element | Window | null = window,
) => {
  const savedHandler = useRef<EventHandler<T>>();
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // console.log(element);
    const isSupported = element && element.addEventListener;
    if (!isSupported) {
      return;
    }
    const eventListener = (event: any) => savedHandler.current!(event);

    element!.addEventListener(eventName, eventListener);
    return () => {
      element!.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default useEventListener;
