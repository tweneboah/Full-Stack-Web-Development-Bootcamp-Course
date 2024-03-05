import { useState } from "react";

import Images from "./components/Images";
import GenerateImage from "./components/GenerateImage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GenerateImage />
      <Images />
    </>
  );
}

export default App;
