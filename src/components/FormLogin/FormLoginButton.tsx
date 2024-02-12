import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export const FormLoginButton = (props: ButtonProps) => {
  return (
    <button
      className="bg-primary rounded-lg w-full py-2 px-6 text-white"
      {...props}
    />
  );
};
