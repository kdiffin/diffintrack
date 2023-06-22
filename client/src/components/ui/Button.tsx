import { SignInButton as SnButton } from "@clerk/clerk-react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} flex items-center gap-1 rounded-sm bg-indigo-700 px-6 py-2 font-semibold text-white  hover:bg-indigo-500`}
    >
      {children}
    </button>
  );
}

interface ButtonProps {
  children: React.ReactNode;
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

interface LinkProps {
  children: React.ReactNode;
  href: Url;
  className?: string;
}

// interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export default Button;
