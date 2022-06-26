import { DetailedHTMLProps, HTMLAttributes } from "react";

//
interface PageWidthWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export const PageWidthWrapper = ({
  className = "",
  children,
  ...props
}: PageWidthWrapperProps) => (
  <div className={`w-[1024px] mx-auto ${className}`} {...props}>
    {children}
  </div>
);
