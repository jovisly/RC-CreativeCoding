import { useEffect } from "react";

const DisableScroll = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevents scrolling when user presses up, down, or space.
      if (e.keyCode === 32 || e.keyCode === 38 || e.keyCode === 40) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown, false);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, []);

  return <div />;
};

export default DisableScroll;
