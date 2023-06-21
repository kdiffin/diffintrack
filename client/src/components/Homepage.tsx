import Button from "./ui/Button";

function Homepage() {
  return (
    <main className=" text-white flex flex-col   flex-1 w-full items-center justify-center">
      <section className="text-center ">
        <h1 className="text-7xl max-w-screen-lg font-bold  text-gradient-to-r from-indigo-500 to-purple-500">
          The workout app for people who track every set.
        </h1>

        <p className="mt-6 mb-9 text-xl max-w-screen-md bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text font-semibold text-center mx-auto">
          Experience the Ultimate Workout Companion: Seamlessly Track, Plan, and
          Level Up Your Fitness Journey with Precision and Ease!{" "}
          <span className="text-white"> 💪🔥</span>
        </p>

        <Button className=" py-3 px-8">Get Started</Button>
      </section>
    </main>
  );
}

export default Homepage;
