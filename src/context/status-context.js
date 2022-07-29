import { createContext } from "react";

export const StatusContext = createContext({
  cacheData: {},
  getStatus: () => undefined,
  setStatus: () => undefined,
  register: () => () => undefined
});
