import Select from "react-select";
import { Props as SelectProps } from "react-select";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputDropdown = React.forwardRef<any, SelectProps>((props, ref) => {
  return (
    <Select
      ref={ref}
      {...props}
      styles={{
        control: (styles) => {
          return {
            ...styles,
            background: "transparent",
            fontSize: "14px",
            borderColor: "var(--gray-6)",
            color: "var(--gray-12)",
          };
        },
        menu: (styles) => {
          return {
            ...styles,
            background: "var(--color-panel-solid)",
            color: "var(--gray-12)",
          };
        },
        input: (styles) => {
          return {
            ...styles,
            color: "var(--gray-12)",
          };
        },
        option: (styles) => {
          return {
            ...styles,
            fontSize: "14px",
            color: "var(--gray-12)",
          };
        },
        singleValue: (styles) => {
          return {
            ...styles,
            color: "var(--gray-12)",
          };
        },
      }}
      theme={(themeSelect) => {
        return {
          ...themeSelect,
          colors: {
            ...themeSelect.colors,
            primary50: `var(--focus-8)`,
            primary25: `var(--focus-8)`,
            primary75: `var(--focus-8)`,
            primary: `var(--focus-8)`,
          },
        };
      }}
    />
  );
});

export default InputDropdown;
