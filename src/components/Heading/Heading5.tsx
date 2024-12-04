import Heading from "./Heading";

import { ReactNode } from "react";

const Heading5 = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <Heading as="h5" size={"4"} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading5;
