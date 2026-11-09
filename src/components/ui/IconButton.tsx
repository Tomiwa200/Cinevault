import type { ComponentPropsWithoutRef, ReactNode } from "react";


type IconButtonVariant = "default" | "ghost";



interface IconButtonProps extends Omit<ComponentPropsWithoutRef<"button">, "children">{
    icon: ReactNode;
    label: string;
    variant?: IconButtonVariant;
    fill?: string;
}

const variantStyles: Record<IconButtonVariant, string> = {
    default: " text-text-primary",
   ghost: "text-text-secondary ",
}



export function IconButton({
 icon,
 label,
 variant ="default",
 className,
 fill,
 onClick,
 disabled = false
}: IconButtonProps){
  return(
    <button type="button"
     aria-label={label}
     className={`${variantStyles[variant]} ${className} ${fill}`}
     onClick={onClick}
     disabled={disabled}
    >
      {icon}
    </button>
  )
}