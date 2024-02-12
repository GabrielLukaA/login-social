import { ComponentProps } from "react";

interface WrapperProps extends ComponentProps<"div"> {}

export const SocialLoginWrapper = (props: WrapperProps) => {
  return <div className="flex justify-between gap-4 w-full" {...props} />;
};
