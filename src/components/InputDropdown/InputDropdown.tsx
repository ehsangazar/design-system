import Select from "react-select";
import { Props as SelectProps } from "react-select";
import React from "react";

const InputDropdown = React.forwardRef<Select, SelectProps>((props, ref) => {
  const setRef = (instance: unknown) => {
    if (instance) {
      (ref as React.MutableRefObject<Select>).current = instance as Select;
      (instance as unknown as HTMLInputElement).focus();
    }
  };

  return (
    <Select
      ref={setRef}
      {...props}
      styles={{
        control: (styles) => {
          return {
            ...styles,
            fontSize: "14px",
            borderColor: "var(--gray-6)",
          };
        },
        option: (styles) => {
          return {
            ...styles,
            fontSize: "14px",
          };
        },
      }}
      theme={(themeSelect) => {
        console.log("debug themeSelect", themeSelect);
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
