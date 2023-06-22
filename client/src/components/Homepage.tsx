import Button, { LinkButton } from "./ui/Button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useClerk, useSignIn } from "@clerk/clerk-react";

function Homepage() {
  return (
    <>
      <header className="bg-transparent py-5">
        <nav className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-3xl font-bold">dfntrack.</h1>
          <LinkButton href={"/home"}>Sign in</LinkButton>
        </nav>
      </header>

      <main className=" flex w-full flex-1   flex-col items-center justify-center text-white">
        <section className="text-center ">
          <h1 className="text-gradient-to-r max-w-screen-lg from-indigo-500 to-purple-500  text-6xl font-bold  md:text-7xl">
            The workout app for the analyzers.
          </h1>

          <p
            className="mx-auto mb-9 mt-6 max-w-screen-md bg-gradient-to-r 
            from-purple-500 via-indigo-500 to-sky-500 bg-clip-text text-center
            text-xl font-bold capitalize text-transparent md:text-2xl"
          >
            Level Up Your Fitness Journey with Precision tracking and
            consistent, disciplined schedules!{" "}
            <span className="text-white"> 💪🔥</span>
          </p>

          <div className="mx-auto flex items-center justify-center gap-6">
            <Button className=" rounded-md bg-transparent  !px-0 !py-0 outline-dashed outline-2 outline-indigo-500  hover:!bg-indigo-500/30">
              <a
                href="https://github.com/diffim/workout-tracker"
                target="_blank"
                className="flex h-full flex-1 items-center  gap-1 px-8 py-3 "
              >
                <FaGithub /> Source
              </a>
            </Button>

            <LinkButton href="/home" className="!px-8 !py-3">
              Get Started
            </LinkButton>
          </div>
        </section>
      </main>
    </>
  );
}

export default Homepage;
