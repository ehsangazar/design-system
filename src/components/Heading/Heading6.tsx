import Heading from "./Heading";

import { ReactNode } from "react";

const Heading6 = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <Heading as="h6" size={"4"} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading6;
