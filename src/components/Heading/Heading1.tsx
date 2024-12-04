import Heading from "./Heading";

import { ReactNode } from "react";

const Heading1 = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <Heading as="h1" size={"8"} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading1;
