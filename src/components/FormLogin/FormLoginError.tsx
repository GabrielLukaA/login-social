type Error = {
  message:string
}

export const FormLoginError = ({message}:Error) => {
  return (
 <span className="text-sm text-red-600 py-1">{message}</span>
  )
}