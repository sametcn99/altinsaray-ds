import { useEffect, useState } from "react";

const useAlert = (delay: number) => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, delay);

    // Cleanup: clear the timer when the component is unmounted
    return () => {
      clearTimeout(timer);
    };
  }, [delay]); // Re-run the effect if 'delay' changes

  return showComponent;
};

export default useAlert;
