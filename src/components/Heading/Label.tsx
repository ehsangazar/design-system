import { useContext } from "react";
import Text from "../Text/Text";
import ThemeContext from "../../contexts/ThemeContext";
import { TextProps } from "@radix-ui/themes";

const Label = ({ children, ...rest }: TextProps) => {
  const { typography } = useContext(ThemeContext);

  return (
    <Text as="label" size={typography?.label?.size} {...rest}>
      {children}
    </Text>
  );
};

export default Label;
