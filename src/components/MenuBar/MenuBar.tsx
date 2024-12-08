import Box from "../Box/Box";

import { ReactNode } from "react";
import "./MenuBar.css";

const MenuBarRoot = ({ children }: { children: ReactNode }) => {
  return (
    <Box overflowX={"hidden"}>
      <nav className="MenuBar">
        <ul className="MenuBar-items">{children}</ul>
      </nav>
    </Box>
  );
};

const MenuBarItem = ({
  children,
  isActive,
}: {
  children: ReactNode;
  isActive?: boolean;
}) => {
  return (
    <li className={`MenuBar-item ${isActive ? "MenuBar-item--active" : ""}`}>
      {children}
    </li>
  );
};

const MenuBarSubMenu = ({ children }: { children: ReactNode }) => {
  return (
    <ul
      style={{
        display: "none",
        listStyle: "none",
        padding: 0,
        position: "absolute",
      }}
    >
      {children}
    </ul>
  );
};

export default {
  Root: MenuBarRoot,
  Item: MenuBarItem,
  SubMenu: MenuBarSubMenu,
};
