import React, { useContext } from "react";
import Box from "../Box/Box";
import Small from "../Heading/Small";
import Link from "../Link/Link";
import Flex from "../Flex/Flex";
import { CaretRightIcon } from "@radix-ui/react-icons";
import { LinkProps } from "@radix-ui/themes";
import ThemeContext from "../../contexts/ThemeContext";

interface BreadcrumbProps {
  children: React.ReactNode;
}

const BreadcrumbRoot: React.FC<BreadcrumbProps> = ({ children }) => {
  const items = React.Children.toArray(children);
  return (
    <Flex align={"center"} justify={"start"}>
      {items.map((item, index) => (
        <Flex key={index} align={"center"} justify={"center"}>
          {item}
          {index < items.length - 1 && (
            <CaretRightIcon
              style={{
                marginTop: "4px",
              }}
              width={"20px"}
              height={"20px"}
            />
          )}
        </Flex>
      ))}
    </Flex>
  );
};

interface BreadcrumbItemProps {
  children: React.ReactNode;
  isCurrentPage?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  isCurrentPage,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box>
      {isCurrentPage ? (
        <Small color={theme.accentColor}>{children}</Small>
      ) : (
        <Small>{children}</Small>
      )}
    </Box>
  );
};

const BreadcrumbLink: React.FC<LinkProps> = ({ children, ...rest }) => (
  <Link {...rest} color="gray">
    {children}
  </Link>
);

export default {
  Root: BreadcrumbRoot,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
};
