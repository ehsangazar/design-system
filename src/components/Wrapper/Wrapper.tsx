import { ReactNode } from "react";

import "./reset.css";
import "@radix-ui/themes/styles.css";
import "@radix-ui/themes/layout.css";
import "./main.css";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
