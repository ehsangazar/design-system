import { HeadingProps } from "@radix-ui/themes";
import ThemeContext from "../../contexts/ThemeContext";
import Heading from "./Heading";
import { useContext } from "react";

const Heading4 = ({ children, ...rest }: HeadingProps) => {
  const { typography } = useContext(ThemeContext);

  return (
    <Heading as="h4" size={typography?.heading4?.size} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading4;
