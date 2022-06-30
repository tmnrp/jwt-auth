import { DetailedHTMLProps, HTMLAttributes } from "react";

interface PageWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const PageWrapper = ({
  className = "",
  children,
  ...props
}: PageWrapperProps) => (
  <div
    className={`
      min-h-[calc(100vh-65px)]
      ${className}
    `}
    {...props}
  >
    {children}
  </div>
);
