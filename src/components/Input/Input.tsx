import { TextField as RadixTextField } from "@radix-ui/themes";

interface InputProps extends React.ComponentProps<typeof RadixTextField.Root> {
  icon?: React.ReactNode;
}

const Input = ({ icon, ...rest }: InputProps) => {
  return (
    <>
      <RadixTextField.Root {...rest}>
        {icon && <RadixTextField.Slot>{icon}</RadixTextField.Slot>}
      </RadixTextField.Root>
    </>
  );
};

export default Input;
