import { ReactNode, useContext } from "react";
import Text from "../Text/Text";
import ThemeContext from "../../contexts/ThemeContext";

const Label = ({ children, ...rest }: { children: ReactNode }) => {
  const { typography } = useContext(ThemeContext);

  return (
    <Text as="label" size={typography?.label?.size} {...rest}>
      {children}
    </Text>
  );
};

export default Label;
