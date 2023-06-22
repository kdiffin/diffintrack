import React from "react";
import Button from "./ui/Button";
import Link from "next/link";
import { useClerk } from "@clerk/clerk-react";

function Navbar() {
  const { openSignIn } = useClerk();

  return (
    <header className="bg-transparent py-5">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-3xl font-bold">dfntrack.</h1>
        <Button onClick={() => openSignIn()}>Sign in</Button>
      </nav>
    </header>
  );
}

export default Navbar;
