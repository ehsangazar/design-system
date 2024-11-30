import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { ThemePanel } from "@radix-ui/themes";
import Wrapper from "./components/Wrapper/Wrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Wrapper>
      <App />
      <ThemePanel />
    </Wrapper>
  </StrictMode>
);
