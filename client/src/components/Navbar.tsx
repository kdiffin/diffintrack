import React from "react";
import Button from "./ui/Button";

function Navbar() {
  return (
    <header className="bg-transparent py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">Diffin Workout</h1>
        <Button>Get Started</Button>
      </nav>
    </header>
  );
}

export default Navbar;
