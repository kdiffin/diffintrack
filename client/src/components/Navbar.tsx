import React from "react";
import Button, { LinkButton } from "./ui/Button";
import Link from "next/link";
import { useClerk } from "@clerk/clerk-react";
import Avatar from "../components/ui/Avatar";
import {
  MdAdd,
  MdEdit,
  MdDelete,
  MdLogout,
  MdLink,
  MdSettings,
} from "react-icons/md";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

function Navbar() {
  return (
    <header className="bg-transparent py-5">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-3xl font-bold text-indigo-500">dfntrack.</h1>

        <div className="flex flex-1 items-center justify-end gap-4">
          <NavbarItem />
          <NavbarItem />
          <NavbarItem />

          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="h-10 w-10">
              <Avatar />
            </DropdownMenu.Trigger>

            <DropdownMenuAvatar />
          </DropdownMenu.Root>
        </div>
      </nav>
    </header>
  );
}

function NavbarItem() {
  return <button className="capitalize">home</button>;
}

export function DropdownMenuAvatar() {
  return (
    <DropdownMenu.Content
      onCloseAutoFocus={(e: { preventDefault: () => any }) =>
        e.preventDefault()
      }
      className="dropdown "
      sideOffset={12}
    >
      <DropdownMenu.Item className="dropdown-item group ">
        <MdSettings size={20} className="text-zinc-500" /> Settings
      </DropdownMenu.Item>

      <DropdownMenu.Item className="dropdown-item group">
        <MdAdd size={20} className="text-zinc-500" /> Ok
      </DropdownMenu.Item>

      <DropdownMenu.Item className="dropdown-item group ">
        <MdEdit size={20} className="text-zinc-500" /> Edit
      </DropdownMenu.Item>

      <DropdownMenu.Item className="dropdown-item group ">
        <MdLogout size={20} className="text-zinc-500" /> Sign out
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  );
}

export default Navbar;
