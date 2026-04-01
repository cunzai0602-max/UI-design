import * as React from "react";
import { cn } from "@/src/lib/utils";

export interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "glitch";
}

const CyberButton = React.forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center font-mono uppercase tracking-widest transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none cyber-chamfer-sm px-6 py-3 text-sm font-bold";
    
    const variants = {
      default: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-background hover:shadow-neon",
      secondary: "bg-transparent border-2 border-accent-secondary text-accent-secondary hover:bg-accent-secondary hover:text-background hover:shadow-neon-secondary",
      outline: "bg-transparent border border-border text-foreground hover:border-accent hover:text-accent hover:shadow-neon",
      ghost: "bg-transparent text-foreground hover:bg-accent/10 hover:text-accent",
      glitch: "bg-accent text-background border-2 border-accent hover:brightness-110",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {variant === "glitch" ? (
          <span className="cyber-glitch-text" data-text={typeof children === 'string' ? children : 'ERROR'}>
            {children}
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);
CyberButton.displayName = "CyberButton";

export { CyberButton };
