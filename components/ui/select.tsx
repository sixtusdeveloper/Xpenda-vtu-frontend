interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  children,
  onValueChange,
  ...props
}) => {
  return (
    <select
      {...props}
      onChange={(e) => onValueChange?.(e.target.value)} // ✅ Uses onValueChange
      className="w-full px-4 py-3 h-12 border rounded-none bg-blue-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </select>
  );
};

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export const SelectItem: React.FC<SelectItemProps> = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

// import React from "react";

// interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
//   children: React.ReactNode;
//   onValueChange?: (value: string) => void;
// }

// export const Select: React.FC<SelectProps> = ({
//   children,
//   onValueChange,
//   ...props
// }) => {
//   return (
//     <select
//       {...props}
//       onChange={(e) => onValueChange?.(e.target.value)}
//       className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:text-white"
//     >
//       {children}
//     </select>
//   );
// };

// interface SelectItemProps {
//   value: string;
//   children: React.ReactNode;
// }

// export const SelectItem: React.FC<SelectItemProps> = ({ value, children }) => {
//   return <option value={value}>{children}</option>;
// };
