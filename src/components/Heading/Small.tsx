import { ReactNode, useContext } from "react";
import Text from "../Text/Text";
import ThemeContext from "../../contexts/ThemeContext";

const Small = ({ children, ...rest }: { children: ReactNode }) => {
  const { typography } = useContext(ThemeContext);

  return (
    <Text as="span" size={typography?.small?.size} {...rest}>
      {children}
    </Text>
  );
};

export default Small;
