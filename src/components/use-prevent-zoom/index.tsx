import React, { useEffect } from "react";

function UsePreventZoom(scrollCheck = true, keyboardCheck = true) {
  useEffect(() => {
    const handleKeydown = (e: any) => {
      if (
        keyboardCheck &&
        ((e.ctrlKey && e.key === "+") || // For Windows/Linux browsers
          (e.metaKey && e.key === "=") || // For Mac OS browsers
          (e.ctrlKey && e.key === "-") || // For Windows/Linux browsers
          (e.metaKey && e.key === "-")) // For Mac OS browsers
      ) {
        e.preventDefault();
      }
    };

    const handleWheel = (e: any) => {
      if (scrollCheck && e.ctrlKey) {
        e.preventDefault();
      }
    };

    document.addEventListener("wheel", handleKeydown, { passive: false });
    document.addEventListener("keydown", handleKeydown, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleKeydown);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);
}

// export default UsePreventZoom;
