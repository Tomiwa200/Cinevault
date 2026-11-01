import type { ComponentPropsWithoutRef, ReactNode } from "react";


type IconButtonVariant = "default" | "ghost";

type IconButonSize = "sm" | "md" | "lg";

interface IconButtonProps extends Omit<ComponentPropsWithoutRef<"button">, "children">{
    icon: ReactNode;
    label: string;
    variant?: IconButtonVariant;
    size?: IconButonSize;
}

const variantStyles: Record<IconButtonVariant, string> = {
    default: " text-text-primary",
   ghost: "text-text-secondary ",
}

const sizeStyles: Record<IconButonSize, string> = {
    sm: "h-8 w-8 text-sm",
   md: "h-10 w-10 text-base",
   lg: "h-12 w-12 text-lg",
}

export function IconButton({
 icon,
 label,
 variant ="default",
 size="md",
 className,
 onClick,
 disabled = false
}: IconButtonProps){
  return(
    <button type="button"
     aria-label={label}
     className={`${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
     onClick={onClick}
     disabled={disabled}
    >
      {icon}
    </button>
  )
}