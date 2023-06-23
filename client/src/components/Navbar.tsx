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
  MdMenu,
} from "react-icons/md";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

function Navbar() {
  return (
    <header className="mb-10 bg-transparent px-6  py-5 shadow shadow-indigo-900">
      <nav className=" mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div>
            <MdMenu size={24} className="mt-[5px]" />
          </div>

          <Link href={"/home"}>
            <h1 className="text-3xl font-bold text-indigo-600">dfntrack.</h1>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          <NavbarItem title={"home"} />
          <NavbarItem title={"workouts"} />
          <NavbarItem title={"statistics"} />

          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="ml-1 h-10 w-10">
              <Avatar />
            </DropdownMenu.Trigger>

            <DropdownMenuAvatar />
          </DropdownMenu.Root>
        </div>
      </nav>
    </header>
  );
}

function NavbarItem({ title }: { title: string }) {
  return (
    <button className="text-lg font-semibold capitalize text-indigo-600">
      {title}
    </button>
  );
}

export function DropdownMenuAvatar() {
  const { signOut } = useClerk();

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

      <DropdownMenu.Item
        onSelect={() => signOut()}
        className="dropdown-item group "
      >
        <MdLogout size={20} className="text-zinc-500" /> Sign out
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  );
}

export default Navbar;
