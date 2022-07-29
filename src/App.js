import React, { useContext, useState } from "react";
import { StatusPicker } from "./components/status-picker";

import "./styles.css";
// import { StatusContext } from "./contexts/status-context";

export default function App() {
  const [showPickers, setShowPickers] = useState(true);

  const callGetStatuses = () => {};

  return (
    <div>
      {showPickers && (
        <>
          <StatusPicker value="Task/1" />
          <StatusPicker value="Shot/2" />
          <StatusPicker value="Version/2" />
          <StatusPicker value="Version/1" />
          <StatusPicker value="Version/3" />
          <StatusPicker value="Version/1" />
          <StatusPicker value="Task/1" />
        </>
      )}
      <button onClick={() => setShowPickers(!showPickers)}>Toggle</button>
      <button onClick={callGetStatuses}>Get Statuses</button>
    </div>
  );
}
