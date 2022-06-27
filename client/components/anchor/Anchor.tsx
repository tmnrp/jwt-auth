import Link from "next/link";
import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

interface AnchorProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  isActive?: boolean;
}
export const Anchor = ({
  className = "",
  href = "",
  isActive = false,
  children,
  ...props
}: AnchorProps) => (
  <Link href={href}>
    <a
      className={`
        tracking-wider 
        border-b border-transparent hover:text-gray-900
        ${
          isActive
            ? "text-gray-900 border-gray-400 py-1.5 font-semibold"
            : "text-gray-600"
        } 
        ${className}
      `}
      {...props}
    >
      {children}
    </a>
  </Link>
);
