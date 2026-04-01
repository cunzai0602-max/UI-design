import * as React from "react";
import { cn } from "@/src/lib/utils";

export interface CyberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
}

const CyberInput = React.forwardRef<HTMLInputElement, CyberInputProps>(
  ({ className, prefix = ">", ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {prefix && (
          <span className="absolute left-3 text-accent font-mono text-sm pointer-events-none">
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          className={cn(
            "flex h-12 w-full bg-input border border-border cyber-chamfer-sm px-3 py-2 text-sm font-mono text-accent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-accent focus-visible:shadow-neon disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
            prefix ? "pl-8" : "",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
CyberInput.displayName = "CyberInput";

export { CyberInput };
