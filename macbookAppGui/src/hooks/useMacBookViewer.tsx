import { useState } from "react";

function useMacBookViewer() {
  const [color, setColor] = useState("#2e2c2e");
  const [scale, setScale] = useState(0.08);

  const reset = () => {
    setColor("#2e2c3e");
    setScale(0.08);
  };

  return { color, setColor, scale, setScale, reset };
}

export default useMacBookViewer