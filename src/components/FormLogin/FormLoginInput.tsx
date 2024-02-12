import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends ComponentProps<"input"> {
  name: string;
}

export const FormLoginInput = ({ name, ...props }: InputProps) => {
  const { register } = useFormContext();
  return (
    <input
      type="email"
      className="w-full bg-input outline-none"
      {...register(name)}
      {...props}
    />
  );
};
