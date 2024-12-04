import ThemeContext from "../../contexts/ThemeContext";
import Heading from "./Heading";

import { ReactNode, useContext } from "react";

const Heading1 = ({ children, ...rest }: { children: ReactNode }) => {
  const { typography } = useContext(ThemeContext);
  return (
    <Heading as="h1" size={typography?.heading1?.size} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading1;
