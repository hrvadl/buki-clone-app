import { useEffect, useRef } from "react";

type TimeoutRef = { timer: NodeJS.Timeout | null };

export default function useDebounce(
  fn: () => void,
  deps: unknown[],
  time = 300
) {
  const timer = useRef<TimeoutRef>({ timer: null });

  useEffect(() => {
    if (timer.current?.timer) clearTimeout(timer.current.timer);
    timer.current.timer = setTimeout(fn, time);

    return () => {
      if (timer.current?.timer) clearTimeout(timer.current.timer);
    };
  }, deps);
}
