import Heading from "./Heading";

import { ReactNode } from "react";

const Heading4 = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <Heading as="h4" size={"5"} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading4;
