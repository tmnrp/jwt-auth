import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface IBtnSecondary
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const BtnSecondary = ({
  className = "px-4 py-1.5 rounded border hover:border-gray-900",
  children,
  ...props
}: IBtnSecondary) => (
  <button className={`btn-secondary ${className}`} {...props}>
    {children}
  </button>
);
