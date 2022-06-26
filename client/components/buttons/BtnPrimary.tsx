import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface IBtnPrimary
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const BtnPrimary = ({
  className = "px-4 py-1.5 rounded bg-primary text-white hover:bg-opacity-90",
  children,
  ...props
}: IBtnPrimary) => (
  <button className={`btn-primary ${className}`} {...props}>
    {children}
  </button>
);
