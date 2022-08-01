import { useCallback, useContext, useEffect, useState } from "react";
import { StatusContext } from "../context/status-context";

export function useStatus({ value }) {
  const { cacheData, getStatus } = useContext(StatusContext);
  const [updatedStatus, setUpdatedStatus] = useState("");

  useEffect(() => {
    const status = getStatus(value);
    status && setUpdatedStatus(status);
    console.log("updated status " + status);
  }, [cacheData, getStatus, value]);

  const getLastStatus = useCallback(() => {
    return updatedStatus;
  }, [updatedStatus]);

  return { getLastStatus };
}
