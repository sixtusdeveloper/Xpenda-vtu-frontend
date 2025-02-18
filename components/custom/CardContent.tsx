// Card Content Component
import { ReactNode } from "react";

// Card Content Component
interface CardContentProps {
  children: ReactNode;
  className?: string;
}

const CardContent = ({ children, className = "" }: CardContentProps) => {
  return <div className={`mt-2 ${className}`}>{children}</div>;
};

export default CardContent;
