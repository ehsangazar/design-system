import ThemeContext from "../../contexts/ThemeContext";
import Heading from "./Heading";

import { ReactNode, useContext } from "react";

const Heading5 = ({ children, ...rest }: { children: ReactNode }) => {
  const { typography } = useContext(ThemeContext);
  return (
    <Heading as="h5" size={typography?.heading5?.size} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading5;
