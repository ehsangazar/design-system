import { HeadingProps } from "@radix-ui/themes";
import ThemeContext from "../../contexts/ThemeContext";
import Heading from "./Heading";
import { useContext } from "react";

const Heading6 = ({ children, ...rest }: HeadingProps) => {
  const { typography } = useContext(ThemeContext);

  return (
    <Heading as="h6" size={typography?.heading6?.size} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading6;
