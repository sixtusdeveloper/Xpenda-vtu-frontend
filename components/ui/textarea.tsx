import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[160px] w-full border-input p-4 font-medium border text-sm text-gray-700 dark:text-gray-100 rounded-none bg-blue-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
