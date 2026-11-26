import Link from "next/link";
import type { ReactNode } from "react";
import "./square-button.css";

type SquareButtonVariant = "white" | "ghost" | "navy" | "line" | "emerald";

type SquareButtonProps = {
  children: ReactNode;
  variant?: SquareButtonVariant;
  size?: "md" | "sm";
  className?: string;
};

function classes({ variant = "navy", size = "md", className }: Omit<SquareButtonProps, "children">) {
  return ["sq-btn", `sq-btn-${variant}`, size === "sm" ? "sq-btn-sm" : "", className ?? ""].filter(Boolean).join(" ");
}

/** Square, uppercase call-to-action box. */
export function SquareButton({ href, children, ...rest }: SquareButtonProps & { href: string }) {
  return (
    <Link prefetch={false} href={href} className={classes(rest)}>
      {children}
    </Link>
  );
}

/** Same visual as SquareButton, for use inside an element that is already a link. */
export function SquareButtonShape({ children, ...rest }: SquareButtonProps) {
  return <span className={classes(rest)}>{children}</span>;
}
