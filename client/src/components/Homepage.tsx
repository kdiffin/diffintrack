import Button from "./ui/Button";
import { FaGithub } from "react-icons/fa";

function Homepage() {
  return (
    <main className=" text-white flex flex-col   flex-1 w-full items-center justify-center">
      <section className="text-center ">
        <h1 className="text-7xl max-w-screen-lg font-bold  text-gradient-to-r from-indigo-500 to-purple-500">
          The workout app for people who track every set.
        </h1>

        <p
          className="mt-6 mb-9 text-2xl max-w-screen-md capitalize 
            font-bold bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500
           text-transparent bg-clip-text text-center mx-auto"
        >
          Level Up Your Fitness Journey with Precision tracking and consistent,
          disciplined schedules! <span className="text-white"> 💪🔥</span>
        </p>

        <div className="flex items-center justify-center gap-6 mx-auto">
          <Button className=" bg-transparent border-indigo-500   border-2 rounded-md hover:bg-indigo-500/40  border-dashed py-3 px-8">
            <a href="" className="flex items-center gap-1">
              <FaGithub /> Source
            </a>
          </Button>
          <Button className=" py-3 px-9">Sign in</Button>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
