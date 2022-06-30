import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface IButtonPrimary
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const ButtonPrimary = ({
  className = "",
  children,
  ...props
}: IButtonPrimary) => (
  <button
    className={`
      px-4 py-2 rounded bg-primary
      hover:bg-opacity-90 outline-none hover:ring-2 focus:ring-2
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);
