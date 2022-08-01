import React, { memo, useContext, useState } from "react";
import { StatusContext } from "./context/status-context";
import { StatusPicker } from "./components/status-picker";
import { Consumer as Status } from "./wrapper/status";

export const Main = memo(() => {
  const { cacheData, getStatus, setStatus } = useContext(StatusContext);
  const [key, setKey] = useState("key");
  const [value, setValue] = useState("value");
  const [showPickers, setShowPickers] = useState(true);

  const handleStatusChange = () => {
    setStatus(key, value);
  };

  return (
    <div>
      <div>
        <input value={key} onChange={(e) => setKey(e.target.value)} />
        :
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleStatusChange}>Set</button>
      </div>
      <br />
      <div>
        {cacheData &&
          Object.entries(cacheData.current).map((value) => {
            return <StatusPicker value={value[0]} status={value[1]} />;
          })}
      </div>
      <br />
      <div>
        Current value of '{key}': {getStatus(key) || "undefined"}
      </div>

      {showPickers && (
        <>
          <Status value="Task/1" />
          <Status value="Shot/2" />
          <Status value="Version/2" />
          <Status value="Version/1" />
          <Status value="Version/3" />
          <Status value="Version/1" />
          <Status value="Task/1" />
        </>
      )}
      <button onClick={() => setShowPickers(!showPickers)}>Toggle</button>
    </div>
  );
});
