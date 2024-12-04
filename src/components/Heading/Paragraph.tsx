import { useContext } from "react";
import Text from "../Text/Text";
import ThemeContext from "../../contexts/ThemeContext";
import { TextProps } from "@radix-ui/themes";

const Paragraph = ({ children, ...rest }: TextProps) => {
  const { typography } = useContext(ThemeContext);

  return (
    <Text as="p" size={typography?.paragraph?.size} {...rest}>
      {children}
    </Text>
  );
};

export default Paragraph;
