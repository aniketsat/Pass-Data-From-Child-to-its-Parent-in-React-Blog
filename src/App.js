import React, { useState } from "react";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";

function App() {
  const [data, setData] = useState("");

  const printData = (d) => {
    setData(d);
  };

  return (
    <div>
      <InputArea onRecieveData={printData} />
      <OutputArea data={data} />
    </div>
  );
}

export default App;
