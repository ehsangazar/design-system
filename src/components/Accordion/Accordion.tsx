import Box from "../Box/Box";

import React, { ReactNode } from "react";
import Flex from "../Flex/Flex";
import ThemeContext from "../../contexts/ThemeContext";
import borderRadiusHandler from "../../utils/borderRadiusHandler";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Card from "../Card/Card";

type BgType =
  | "gray"
  | "gray-light"
  | "gray-medium"
  | "gray-dark"
  | "gold"
  | "bronze"
  | "brown"
  | "yellow"
  | "amber"
  | "orange"
  | "tomato"
  | "red"
  | "ruby"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "iris"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "jade"
  | "green"
  | "grass";

interface AccordionProps {
  children: ReactNode;
  bg?: BgType;
}

const AccordionRoot = ({ children, bg }: AccordionProps) => {
  return (
    <Box>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<{ bg?: string }>,
            { bg }
          );
        }
        return child;
      })}
    </Box>
  );
};

interface AccordionItemProps {
  children: ReactNode;
  bg?: BgType;
}

const AccordionItem = ({ children, bg }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme } = React.useContext(ThemeContext);

  return (
    <Box
      style={{
        border: "1px solid var(--gray-12)",
        borderRadius: borderRadiusHandler(theme.radius),
        overflow: "hidden",
      }}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<{
              isOpen?: boolean;
              setIsOpen?: (isOpen: boolean) => void;
              bg?: string;
            }>,
            { isOpen, setIsOpen, bg }
          );
        }
        return child;
      })}
    </Box>
  );
};

const AccordionHeader = ({
  children,
  isOpen,
  setIsOpen,
  bg,
}: {
  children: ReactNode;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  bg?: BgType;
}) => {
  return (
    <Card
      style={{
        padding: "0",
        margin: "0",
        borderRadius: "0",
      }}
      bg={bg}
      variant="ghost"
      hoverEnabled
    >
      <Flex
        justify={"between"}
        p={"3"}
        style={{
          borderBottom: isOpen ? `1px solid var(--${bg}-8)` : "",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen && setIsOpen(!isOpen)}
      >
        {children}
        <ChevronDownIcon
          width={"20px"}
          height={"20px"}
          style={{ transform: isOpen ? "rotate(180deg)" : "" }}
        />
      </Flex>
    </Card>
  );
};

const AccordionPanel = ({
  children,
  isOpen,
}: {
  children: ReactNode;
  isOpen?: boolean;
}) => {
  return (
    <Box
      style={{
        maxHeight: isOpen ? "1000px" : "0",
        opacity: isOpen ? "1" : "0",
        overflow: "hidden",
        transitionDuration: "0.6s",
        cursor: "default",
      }}
    >
      <Box p={"3"}>{children}</Box>
    </Box>
  );
};

export default {
  Root: AccordionRoot,
  Item: AccordionItem,
  Header: AccordionHeader,
  Panel: AccordionPanel,
};
