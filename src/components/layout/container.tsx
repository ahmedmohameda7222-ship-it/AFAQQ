import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Container<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={`w-full max-w-none px-[var(--gutter-mobile)] md:px-[var(--gutter-tablet)] xl:px-[var(--gutter-desktop)] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
