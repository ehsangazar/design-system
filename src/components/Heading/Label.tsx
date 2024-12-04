import { ReactNode } from "react";
import Text from "../Text/Text";

const Label = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <Text as="label" size={"2"} {...rest}>
      {children}
    </Text>
  );
};

export default Label;
