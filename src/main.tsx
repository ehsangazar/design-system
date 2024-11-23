import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import "./index.css";
import App from "./App.tsx";
import { ThemePanel } from "@radix-ui/themes";
import Theme from "./components/Theme/Theme.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <App />
      <ThemePanel />
    </Theme>
  </StrictMode>
);
