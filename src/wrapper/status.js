import { StatusPicker as Presentation } from "../components/status-picker";
import { useContext, useEffect, useState } from "react";
import { StatusContext } from "../context/status-context";

export const Consumer = ({ value }) => {
  const { cacheData, getStatus, register } = useContext(StatusContext);
  const [updatedStatus, setUpdatedStatus] = useState();
  // const { status } = getStatus({ value });
  useEffect(() => {
    const status = getStatus(value);
    setUpdatedStatus(status);
    console.log("updated status " + status);
  }, [cacheData, getStatus, value]);

  useEffect(() => {
    const unregister = register(value);

    return () => {
      unregister();
    };
  }, [register, value]);

  return <Presentation value={value} status={updatedStatus} />;
};
