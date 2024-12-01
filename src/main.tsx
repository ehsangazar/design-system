import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { ThemePanel } from "@radix-ui/themes";
import ThemeWrapper from "./components/ThemeWrapper/ThemeWrapper";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeWrapper>
      <App />
      <ThemePanel />
    </ThemeWrapper>
  </StrictMode>
);
