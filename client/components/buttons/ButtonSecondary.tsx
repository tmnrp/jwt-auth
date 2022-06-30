import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface IButtonSecondary
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive?: boolean;
}

export const ButtonSecondary = ({
  className = "",
  isActive = false,
  children,
  ...props
}: IButtonSecondary) => (
  <button
    className={`
      px-4 py-2 rounded border border-primary
      outline-none hover:ring-2 focus:ring-2
      ${isActive ? "border-gray-900 font-semibold" : ""}
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);
