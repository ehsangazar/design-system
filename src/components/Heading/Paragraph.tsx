import { ReactNode } from "react";
import Text from "../Text/Text";

const Paragraph = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <Text as="p" size={"3"} {...rest}>
      {children}
    </Text>
  );
};

export default Paragraph;
