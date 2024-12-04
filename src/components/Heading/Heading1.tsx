import { HeadingProps } from "@radix-ui/themes";
import ThemeContext from "../../contexts/ThemeContext";
import Heading from "./Heading";
import { useContext } from "react";

const Heading1 = ({ children, ...rest }: HeadingProps) => {
  const { typography } = useContext(ThemeContext);

  return (
    <Heading as="h1" size={typography?.heading1?.size} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading1;
