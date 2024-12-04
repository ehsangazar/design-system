import { HeadingProps } from "@radix-ui/themes";
import ThemeContext from "../../contexts/ThemeContext";
import Heading from "./Heading";
import { useContext } from "react";

const Heading5 = ({ children, ...rest }: HeadingProps) => {
  const { typography } = useContext(ThemeContext);

  return (
    <Heading as="h5" size={typography?.heading5?.size} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading5;
