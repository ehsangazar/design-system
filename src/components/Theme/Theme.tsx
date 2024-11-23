import { Theme as RadixTheme } from "@radix-ui/themes";

import { ReactNode } from "react";

const Theme = ({ children }: { children: ReactNode }) => (
  <RadixTheme accentColor="cyan" grayColor="sand" radius="small">
    {children}
  </RadixTheme>
);

export default Theme;