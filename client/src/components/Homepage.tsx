import Button from "./ui/Button";
import { FaGithub } from "react-icons/fa";

function Homepage() {
  return (
    <main className=" flex w-full flex-1   flex-col items-center justify-center text-white">
      <section className="text-center ">
        <h1 className="text-gradient-to-r max-w-screen-lg from-indigo-500  to-purple-500 text-7xl font-bold">
          The workout app for people who analyze.
        </h1>

        <p
          className="mx-auto mb-9 mt-6 max-w-screen-md bg-gradient-to-r 
            from-purple-500 via-indigo-500 to-sky-500 bg-clip-text text-center
           text-2xl font-bold capitalize text-transparent"
        >
          Level Up Your Fitness Journey with Precision tracking and consistent,
          disciplined schedules! <span className="text-white"> 💪🔥</span>
        </p>

        <div className="mx-auto flex items-center justify-center gap-6">
          <Button className=" rounded-md border-2   border-dashed border-indigo-500 bg-transparent px-8 py-3 hover:!bg-indigo-500/30">
            <a
              href="https://github.com/diffim/workout-tracker"
              target="_blank"
              className="flex items-center gap-1"
            >
              <FaGithub /> Source
            </a>
          </Button>
          <Button className=" px-9 py-3">Get Started</Button>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
