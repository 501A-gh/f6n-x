import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 box-border whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-transform",
  {
    variants: {
      variant: {
        default:
          "text-white dark:text-black bg-zinc-800 dark:bg-zinc-200 border-b-2 border-zinc-950 dark:border-zinc-50 rounded-full shadow-sm",
        secondary:
          "text-black dark:text-white bg-white dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm",
        danger:
          "bg-rose-600 dark:bg-rose-800 text-zinc-100 border border-rose-600 dark:border-rose-700 rounded-full shadow-sm 5",
        ghost:
          "text-blue-600 dark:text-blue-500 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent rounded-full",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-full px-3",
        lg: "h-11 rounded-md px-8",
        icon: "w-8 h-8 transition-all active:scale-95",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
Button.displayName = "Button";

export { Button, buttonVariants };
