import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}
export const Input = ({ className = "", ...props }: InputProps) => (
  <input
    className={`
      px-3 py-2 rounded border
      outline-none hover:ring-2 focus:ring-2
      ${className}
   `}
    {...props}
  />
);
