import React, { useState } from "react";

const InputArea = (props) => {
  const [inputData, setInputData] = useState("");

  const getInputDataHandler = (event) => {
    setInputData(event.target.value);
  };

  const onSendDataHandler = () => {
    props.onRecieveData(inputData);
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={getInputDataHandler}
        value={inputData}
      />
      <button onClick={onSendDataHandler}>Send Data</button>
    </div>
  );
};

export default InputArea;
