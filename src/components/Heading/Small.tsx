import { ReactNode } from "react";
import Text from "../Text/Text";

const Small = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <Text as="span" size={"2"} {...rest}>
      {children}
    </Text>
  );
};

export default Small;
