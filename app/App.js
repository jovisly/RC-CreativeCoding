import React, { useState } from "react";

import RenderIntro from "./components/RenderIntro";
import RenderGame from "./components/RenderGame";

export default function App() {
  const [isIntro, setIsIntro] = useState(true);
  if (isIntro) {
    return <RenderIntro setIsIntro={setIsIntro} />;
  } else {
    return <RenderGame />;
  }
}
