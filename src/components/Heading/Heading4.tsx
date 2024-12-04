import ThemeContext from "../../contexts/ThemeContext";
import Heading from "./Heading";

import { ReactNode, useContext } from "react";

const Heading4 = ({ children, ...rest }: { children: ReactNode }) => {
  const { typography } = useContext(ThemeContext);
  return (
    <Heading as="h4" size={typography?.heading4?.size} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading4;
