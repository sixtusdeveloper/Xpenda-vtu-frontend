// Card Header Component
import { ReactNode } from "react";

// Card Header Component
interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader = ({ children, className = "" }: CardHeaderProps) => {
  return <div className={`border-b pb-2 mb-4 ${className}`}>{children}</div>;
};

export default CardHeader;
