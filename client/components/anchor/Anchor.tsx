import Link from "next/link";
import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

interface AnchorProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}
export const Anchor = ({
  className = "",
  href = "",
  children,
  ...props
}: AnchorProps) => (
  <Link href={href}>
    <a
      className={`tracking-wider font-semibold text-gray-600 hover:text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </a>
  </Link>
);
