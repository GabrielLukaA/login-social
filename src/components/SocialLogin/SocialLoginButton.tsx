import { ComponentProps, ReactNode } from "react"

interface ButtonProps extends ComponentProps<'button'>{
  // children:ReactNode
}
export const SocialLoginButton = (props:ButtonProps) => {
  return (
<button className="w-full stroke-cinza stroke-1 py-3 flex gap-4 justify-center items-center bg-input rounded-lg" {...props} />
  )
}