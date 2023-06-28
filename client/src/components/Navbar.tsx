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
  MdSearch,
} from "react-icons/md";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Input from "./ui/Input";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  function searchWorkout(value: string) {
    const url = {
      ...router.query,
      search: value,
    };

    router.replace(url, undefined, { shallow: true });
  }
  return (
    <header className="  bg-transparent px-6  py-5 ">
      <nav className=" mx-auto flex items-center justify-between px-4">
        <div className="flex flex-[0.3]  items-center gap-3">
          <div>
            <MdMenu size={24} className="" />
          </div>

          <Link href={"/home"}>
            <h1 className="pb-1 text-3xl font-bold text-indigo-600">
              dfntrack.
            </h1>
          </Link>
        </div>

        <div className="  flex-[0.4]">
          <Input
            icon={<MdSearch className="text-zinc-500" />}
            setValue={(value) => searchWorkout(value as string)}
            value={router.query.search}
            placeholder="Search workout"
            className="rounded-md px-3 py-[9px]"
          />
        </div>

        <div className="flex flex-[0.3]  items-center justify-end gap-4">
          <div className=" hidden items-center gap-4 lg:flex">
            <NavbarItem title={"home"} />
            <NavbarItem title={"workouts"} />
            <NavbarItem title={"statistics"} />
          </div>

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
