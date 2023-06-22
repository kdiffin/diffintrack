import React from "react";
import Button from "./ui/Button";

function Navbar() {
  return (
    <header className="bg-transparent py-5">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-3xl font-bold">dfntrack.</h1>
        <Button>Sign in</Button>
      </nav>
    </header>
  );
}

export default Navbar;
