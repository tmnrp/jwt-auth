import { DetailedHTMLProps, HTMLAttributes } from "react";

//
interface PageWidthWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export const PageWidthWrapper = ({
  className = "",
  children,
  ...props
}: PageWidthWrapperProps) => (
  <div
    className={`container px-5 sm:px-14 md:px-24 lg:px-36 xl:px-44 2xl:px-52 mx-auto ${className}`}
    {...props}
  >
    {children}
  </div>
);
