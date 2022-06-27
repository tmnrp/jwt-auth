import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface IBtnSecondary
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive?: boolean;
}

export const BtnSecondary = ({
  className = "",
  isActive = false,
  children,
  ...props
}: IBtnSecondary) => (
  <button
    className={`
      btn-secondary px-4 py-1.5 rounded border hover:border-gray-900
      ${isActive ? "border-gray-900 font-semibold" : ""}
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);
