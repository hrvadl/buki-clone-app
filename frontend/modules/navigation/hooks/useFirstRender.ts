import { useEffect, useRef } from "react";

export default function useFirstRender() {
  const ref = useRef(true);

  useEffect(() => {
    ref.current = false;
  }, []);

  return ref.current;
}
