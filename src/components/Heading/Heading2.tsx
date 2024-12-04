import Heading from "./Heading";

import { ReactNode } from "react";

const Heading2 = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <Heading as="h2" size={"7"} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading2;
