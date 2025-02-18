// Card Title Component
import { ReactNode } from "react";

// Card Title Component
interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

const CardTitle = ({ children, className = "" }: CardTitleProps) => {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
};

export default CardTitle;
