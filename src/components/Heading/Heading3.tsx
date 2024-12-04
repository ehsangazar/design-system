import Heading from "./Heading";

import { ReactNode } from "react";

const Heading3 = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <Heading as="h2" size={"6"} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading3;
