import { StatusPicker as Presentation } from "../components/status-picker";
import { useContext, useEffect, useState } from "react";
import { StatusContext } from "../context/status-context";
import { useStatus } from "../hooks/use-status";

export const Consumer = ({ value }) => {
  const { getLastStatus } = useStatus({ value });
  const { register } = useContext(StatusContext);

  useEffect(() => {
    const unregister = register(value);

    return () => {
      unregister();
    };
  }, [register, value]);

  return <Presentation value={value} status={getLastStatus()} />;
};
