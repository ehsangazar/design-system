import { ReactNode, useContext } from "react";
import Text from "../Text/Text";
import ThemeContext from "../../contexts/ThemeContext";

const Paragraph = ({ children, ...rest }: { children: ReactNode }) => {
  const { typography } = useContext(ThemeContext);

  return (
    <Text as="p" size={typography?.paragraph?.size} {...rest}>
      {children}
    </Text>
  );
};

export default Paragraph;
