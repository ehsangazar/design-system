import React from "react";
import Label from "../Heading/Label";
import Small from "../Heading/Small";
import Flex from "../Flex/Flex";
import Box from "../Box/Box";
import Input from "../Input/Input";

interface FormControlProps {
  label: string;
  component: React.ReactElement<typeof Input>;
  placeholder?: string;
  defaultValue?: string;
  type?: string;
  errorMessage?: string;
}

const FormControl: React.FC<FormControlProps> = ({
  placeholder,
  defaultValue,
  label,
  type,
  errorMessage,
  component = Input,
}) => {
  return (
    <Flex direction={"column"} pt={"2"}>
      <Label>{label}</Label>
      <Box>
        {React.cloneElement(component as React.ReactElement, {
          type,
          placeholder,
          defaultValue,
        })}
      </Box>

      {errorMessage && (
        <Flex height={"20px"} align={"center"}>
          <Small color="red">{errorMessage}</Small>
        </Flex>
      )}
    </Flex>
  );
};

export default FormControl;
