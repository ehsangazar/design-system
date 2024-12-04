import { useContext } from "react";
import Text from "../Text/Text";
import ThemeContext from "../../contexts/ThemeContext";
import { TextProps } from "@radix-ui/themes";

const Small = ({ children, ...rest }: TextProps) => {
  const { typography } = useContext(ThemeContext);

  return (
    <Text as="span" size={typography?.small?.size} {...rest}>
      {children}
    </Text>
  );
};

export default Small;
