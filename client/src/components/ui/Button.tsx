import React, { ButtonHTMLAttributes } from "react";

function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} flex items-center gap-1 rounded-sm bg-indigo-700 px-4 py-2 font-semibold text-white  hover:bg-indigo-500`}
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
