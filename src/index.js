import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";
import { Main } from "./Main";
import { StatusProvider } from "./context/status-provider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StatusProvider>
      <Main />
    </StatusProvider>
  </StrictMode>
);
