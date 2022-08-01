import React, { useRef, useState, useMemo, useCallback } from "react";
import { StatusContext } from "./status-context";

export const StatusProvider = ({ children }) => {
  const [cacheData, setCacheData] = useState({});
  const dataRef = useRef(cacheData);
  const registerRef = useRef({});

  const getCache = useCallback(
    (key) => {
      console.log("Getting value from cache with key " + key, cacheData);
      return cacheData[key];
    },
    [cacheData]
  );

  const setCache = useCallback((key, data) => {
    try {
      console.log("Setting value to cache with key " + key, data);

      setCacheData((current) => {
        const dataCopy = JSON.parse(JSON.stringify(current));
        dataCopy[key] = data;
        return dataCopy;
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const register = useCallback((id) => {
    const currentValue = registerRef.current[id];

    registerRef.current[id] = (currentValue || 0) + 1;

    console.log("registered", registerRef.current);

    return () => {
      console.log("unregister", registerRef.current);
      registerRef.current[id] -= 1;
    };
  }, []);
  // const getStatuses = () => { /* ... Fetchs it all */ };
  //
  // usePollingEffect(() => getStatuses(registerRef.current), [cache, registerRef], {
  //   interval: pollingInterval
  // });
  const initialValue = useMemo(() => {
    return {
      cacheData: dataRef,
      getStatus: getCache,
      setStatus: setCache,
      register,
    };
  }, [getCache, setCache, dataRef, register]);

  return (
    <StatusContext.Provider value={initialValue}>
      {children}
    </StatusContext.Provider>
  );
};
