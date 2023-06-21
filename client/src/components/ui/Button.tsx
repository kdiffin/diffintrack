import React, { ButtonHTMLAttributes } from "react";

function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`${className} bg-indigo-700 flex items-center gap-1 hover:bg-indigo-600 font-semibold text-white py-2 px-4  rounded-sm`}
    >
      {children}
    </button>
  );
}

interface ButtonProps {
  children: React.ReactNode;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default Button;
