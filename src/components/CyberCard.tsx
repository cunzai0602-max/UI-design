import * as React from "react";
import { cn } from "@/src/lib/utils";

export interface CyberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "terminal" | "holographic";
  hoverEffect?: boolean;
}

const CyberCard = React.forwardRef<HTMLDivElement, CyberCardProps>(
  ({ className, variant = "default", hoverEffect = false, children, ...props }, ref) => {
    const baseStyles = "relative transition-all duration-300 ease-in-out cyber-chamfer";
    
    const hoverStyles = hoverEffect 
      ? "hover:-translate-y-1 hover:border-accent hover:shadow-neon" 
      : "";

    if (variant === "terminal") {
      return (
        <div
          ref={ref}
          className={cn(
            baseStyles,
            "bg-background border border-border pt-8",
            hoverStyles,
            className
          )}
          {...props}
        >
          {/* Terminal Header */}
          <div className="absolute top-0 left-0 w-full h-8 bg-muted border-b border-border flex items-center px-4 space-x-2">
            <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-accent/80"></div>
          </div>
          <div className="p-6">
            {children}
          </div>
        </div>
      );
    }

    if (variant === "holographic") {
      return (
        <div
          ref={ref}
          className={cn(
            baseStyles,
            "bg-muted/30 border border-accent/30 shadow-neon backdrop-blur-md p-6",
            hoverStyles,
            className
          )}
          {...props}
        >
          {/* Holographic Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>
          {children}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          "bg-card border border-border p-6",
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CyberCard.displayName = "CyberCard";

export { CyberCard };
