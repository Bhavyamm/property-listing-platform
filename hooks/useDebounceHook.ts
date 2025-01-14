import { useRef, useCallback } from "react";

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timerId = useRef<NodeJS.Timeout | null>(null);

  const debouncedFunction = useCallback(
    (...args: any[]) => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }

      timerId.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedFunction;
}