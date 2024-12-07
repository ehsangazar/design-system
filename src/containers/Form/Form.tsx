import { useForm } from "react-hook-form";
import FormControl from "../../components/FormControl/FormControl";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Box from "../../components/Box/Box";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
});

const Form = () => {
  const {
    register,
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
      <Box pt={"4"}>
        <Button type="submit">Submit</Button>
      </Box>
    </form>
  );
};

export default Form;
