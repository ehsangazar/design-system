import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { ThemePanel } from "@radix-ui/themes";
import ThemeWrapper from "./components/ThemeWrapper/ThemeWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeWrapper>
      <App />
      <ThemePanel />
    </ThemeWrapper>
  </StrictMode>
);
