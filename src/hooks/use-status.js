import { useContext, useEffect, useState } from "react";
import { StatusContext } from "./contexts/status-context";

export function useStatus({ value }) {
  useContext(StatusContext);

  const { cacheData, getStatus } = useContext(StatusContext);
  const [updatedStatus, setUpdatedStatus] = useState();
  // const { status } = getStatus({ value });
  useEffect(() => {
    const status = getStatus(value);
    setUpdatedStatus(status);
    console.log("updated status " + status);
  }, [cacheData, getStatus, value]);

  return updatedStatus;
  // const [status, setStatus] = useState(null);

  // useEffect(() => {
  //   const unregister = controller.register(value);

  //   return () => {
  //     unregister();
  //   };
  // }, [controller, value]);

  // useEffect(() => {
  //   const subscription = controller.$onStatusChange.subscribe(
  //     (changedStatuses) => {
  //       const currentStatus = changedStatuses[value];

  //       if (!currentStatus) return;

  //       setStatus(currentStatus.code);
  //     }
  //   );

  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, [controller, value]);

  // return { controller, status };
}
