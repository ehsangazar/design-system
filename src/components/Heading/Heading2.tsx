import { HeadingProps } from "@radix-ui/themes";
import ThemeContext from "../../contexts/ThemeContext";
import Heading from "./Heading";
import { useContext } from "react";

const Heading2 = ({ children, ...rest }: HeadingProps) => {
  const { typography } = useContext(ThemeContext);

  return (
    <Heading as="h2" size={typography?.heading2?.size} {...rest}>
      {children}
    </Heading>
  );
};

export default Heading2;
