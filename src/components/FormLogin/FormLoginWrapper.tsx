import { ComponentProps } from "react"

interface WrapperProps extends ComponentProps<'form'>{}

export const FormLoginWrapper = (props:WrapperProps) => {
  return (
    <form className="pt-4 flex flex-col gap-4" {...props} />
  )
}