import { ComponentProps } from "react"

interface FieldProps extends ComponentProps<'div'>{}
export const FormLoginField = (props:FieldProps) => {
  return (
    <div className="rounded-lg flex gap-3 bg-input px-4 py-2 w-full stroke-cinza" {...props} />
  )
}