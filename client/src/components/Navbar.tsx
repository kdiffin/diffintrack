import React from "react";
import Button, { LinkButton } from "./ui/Button";
import Link from "next/link";
import { useClerk } from "@clerk/clerk-react";
import Avatar from "../components/ui/Avatar";

function Navbar() {
  return (
    <header className="bg-transparent py-5">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-3xl font-bold text-indigo-500">dfntrack.</h1>
        <LinkButton href="/home">Sign in</LinkButton>
        <Avatar />
      </nav>
    </header>
  );
}

export default Navbar;
