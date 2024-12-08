import { useForm } from "react-hook-form";
import FormControl from "../../components/FormControl/FormControl";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Box from "../../components/Box/Box";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Alert from "../../components/Alert/Alert";
import { IconJarLogoIcon } from "@radix-ui/react-icons";
import InputTextArea from "../../components/InputTextArea/InputTextArea";
import InputDropdown from "../../components/InputDropdown/InputDropdown";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  description: yup.string().required("Description is required"),
  department: yup.object().required("Department is required"),
});

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Form = () => {
  const {
    register,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log("debug data", data));

  return (
    <form onSubmit={onSubmit}>
      <FormControl
        label="First Name"
        placeholder="Enter your first name"
        errorMessage={errors.firstName?.message}
        component={<Input {...register("firstName")} />}
      />
      <FormControl
        label="Last Name"
        placeholder="Enter your last name"
        errorMessage={errors.lastName?.message}
        component={<Input {...register("lastName")} />}
      />
      <FormControl
        label="Email"
        placeholder="Enter your email"
        errorMessage={errors.email?.message}
        component={<Input {...register("email")} />}
      />
      <FormControl
        label="Password"
        type="password"
        placeholder="Enter your password"
        errorMessage={errors.password?.message}
        component={<Input {...register("password")} />}
      />
      <FormControl
        label="Description"
        placeholder="Enter your description"
        errorMessage={errors.description?.message}
        component={<InputTextArea {...register("description")} />}
      />
      <FormControl
        label="Department"
        placeholder="Enter your department"
        errorMessage={errors.department?.message}
        component={
          <InputDropdown
            options={options}
            onChange={(newValue) => {
              setValue(
                "department",
                newValue as { value: string; label: string }
              );
            }}
            onBlur={() => {
              trigger("department");
            }}
          />
        }
      />

      <Box pt={"2"}>
        <Alert.Root variant="soft" color="amber" size="2">
          <Alert.Icon>
            <IconJarLogoIcon width={"20px"} height={"20px"} />
          </Alert.Icon>
          <Alert.Text>
            You have reached the limit of 5 free articles. Please sign up to
            continue reading.
          </Alert.Text>
        </Alert.Root>
      </Box>
      <Box pt={"4"}>
        <Button type="submit">Submit</Button>
      </Box>
    </form>
  );
};

export default Form;
