import ThemeContext from "../../contexts/ThemeContext";
import Heading from "./Heading";

import { ReactNode, useContext } from "react";

const Heading6 = ({ children, ...rest }: { children: ReactNode }) => {
  const { typography } = useContext(ThemeContext);
  return (
    <Heading as="h6" size={typography?.heading6?.size} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading6;
