import ThemeContext from "../../contexts/ThemeContext";
import Heading from "./Heading";

import { ReactNode, useContext } from "react";

const Heading3 = ({ children, ...rest }: { children: ReactNode }) => {
  const { typography } = useContext(ThemeContext);
  return (
    <Heading as="h3" size={typography?.heading3?.size} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading3;
