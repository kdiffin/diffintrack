import { useUser } from "@clerk/nextjs";
import React from "react";
import Card from "~/components/ui/Card";
import withLayout from "~/components/Layout";
import Input from "~/components/ui/Input";
import { Username } from "~/components/ui/UserAttributes";
import { MdHandshake } from "react-icons/md";

function home() {
  const { user } = useUser();
  return (
    <div className="px-5 md:px-10 ">
      <div className="mb-6">
        <div className="mb-2 text-3xl font-bold text-white ">
          <Username />
        </div>
        <p className="font-medium text-indigo-300">
          Welcome to the your tracker
        </p>
      </div>

      <div className="  flex gap-10 overflow-x-auto pb-3  ">
        <ChartContainer
          title="Arms"
          icon={<MdHandshake size={30} />}
          increase="20"
          progress="40"
        />
        <ChartContainer
          title="Chest"
          icon={<MdHandshake size={30} />}
          increase="20"
          progress="40"
        />
        <ChartContainer
          title="Back"
          icon={<MdHandshake size={30} />}
          increase="20"
          progress="40"
        />
        <ChartContainer
          title="Shoulder"
          icon={<MdHandshake size={30} />}
          increase="20"
          progress="40"
        />{" "}
        <ChartContainer
          title="Legs"
          icon={<MdHandshake size={30} />}
          increase="20"
          progress="40"
        />{" "}
      </div>
    </div>
  );
}

function ChartContainer({
  className,
  title,
  progress,
  increase,
  icon,
}: {
  className?: string;
  title: string;
  progress: string;
  increase: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={`${className} flex items-center justify-center bg-indigo-900/20 px-6 py-4 `}
    >
      <div className="mr-20 flex flex-col gap-2">
        <div>{icon}</div>

        <div className="text-3xl font-semibold">{title}</div>

        <p className=" min-w-max font-medium text-indigo-300">
          Workout Accuracy
        </p>
      </div>

      <div className="  flex flex-col justify-between gap-6">
        <div>
          <ProgressCircle progress={50} />
        </div>

        <p className="italic text-indigo-300">+{increase}%</p>
      </div>
    </div>
  );
}

const ProgressCircle = ({ radius = 20123123, progress = 500 }) => {
  const circleSize = radius * 2;
  const circumference = circleSize * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative h-24 w-24">
      <div className="relative">
        <div
          className="h-full w-full overflow-hidden rounded-full border-8 border-blue-500 border-opacity-50"
          style={{ position: "relative" }}
        >
          <div
            className="absolute left-0 top-0 h-full w-full border-8 border-blue-500"
            style={{
              clipPath: `polygon(0 0, 0% 0%, 0% 100%, ${
                (offset / circumference) * 100
              }% 100%, ${(offset / circumference) * 100}% 0)`,
            }}
          />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-xl text-blue-500">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default withLayout(home);
