import { useUser } from "@clerk/nextjs";
import React from "react";
import Card from "~/components/ui/Card";
import withLayout from "~/components/Layout";
import Input from "~/components/ui/Input";
import { Username } from "~/components/ui/UserAttributes";
import { MdHandshake, MdHistory, MdMail } from "react-icons/md";
import { CALENDAR_DATA } from "~/mockdata";
import CalendarComponent from "~/components/Calendar";
import { divergingColorInterpolators } from "@nivo/colors";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";

function home() {
  const { user } = useUser();
  return (
    <div className="px-5 md:px-10 ">
      <div className="mb-6">
        <div className="mb-2 text-3xl font-bold text-white ">
          <Username />
        </div>
        <p className="font-medium text-accent">Welcome to the your tracker</p>
      </div>

      {/* ROW 1 */}

      <div className="flex flex-col gap-5">
        <div className=" !no-scrollbar  col-span-12 flex gap-5 overflow-x-auto   ">
          <ChartContainer
            title="Arms"
            icon={<MdHandshake size={30} className=" text-accent" />}
            increase="20"
            progress="40"
          />
          <ChartContainer
            title="Chest"
            icon={<MdHandshake size={30} className=" text-accent" />}
            increase="20"
            progress="40"
          />
          <ChartContainer
            title="Back"
            icon={<MdHandshake size={30} className=" text-accent" />}
            increase="20"
            progress="40"
          />
          <ChartContainer
            title="Shoulder"
            icon={<MdHandshake size={30} className=" text-accent" />}
            increase="20"
            progress="40"
          />{" "}
          <ChartContainer
            title="Legs"
            icon={<MdHandshake size={30} className=" text-accent" />}
            increase="20"
            progress="40"
          />{" "}
        </div>

        {/* ROW 2 */}
        <div className=" flex flex-col gap-5 xl:flex-row">
          {/* <CalendarComponent data={CALENDAR_DATA} /> */}
          <div className="flex-1 bg-primary p-6  xl:flex-[0.65] ">
            <p className="flex items-center gap-2  font-medium ">
              Workout Calendar
            </p>
          </div>

          {/* RECENT WORKOUTS */}
          <div className="subtle-scrollbar flex max-h-64 flex-col gap-2 overflow-y-auto pr-2  xl:flex-[0.35]">
            <div className="flex items-center gap-2 bg-primary p-4 font-medium ">
              Recent Workouts
            </div>

            {[1, 1, 1, 1, 11, 11, 1, 1, 1, 1, 1, 1, 11, 1].map(() => (
              <div className="flex items-center justify-between bg-primary p-4 hover:bg-secondary">
                <div className="flex flex-col ">
                  <p className="font-medium">Bicep Curl</p>
                  <p className="text-accent">Arms</p>
                </div>

                <div className="text-gray-500">2023-20-11</div>

                <button className="rounded-sm  bg-accent px-3 py-1">
                  visit
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3 */}
        <div className=" flex flex-col gap-5 xl:flex-row">
          {/* WORKOUT ACCURACY */}
          <div className="  flex  flex-1 flex-col bg-primary p-6   ">
            <p className="flex items-center gap-2 font-medium  capitalize ">
              Overall workout rating
            </p>

            <div className="flex flex-col items-center justify-center ">
              <div className="my-4 flex h-36 w-36 items-center justify-center rounded-full border-4 border-accent text-2xl font-semibold">
                A+
              </div>

              <p className="  mt-1  ">Doing great buddy, keep it up!</p>
            </div>
          </div>
          {/* SOCIALS */}
          <div className="  flex  flex-1 flex-col bg-primary p-6   ">
            <p className="flex items-center gap-2 font-medium  capitalize ">
              Where to contact me
            </p>

            <div className="mt-4 flex flex-col  justify-center ">
              <div className="flex items-center gap-2  p-[6px]  ">
                <FaGithub className=" text-accent" size={22} />{" "}
                <p className="    font-medium  ">Github</p>
              </div>

              <div className="my-2 h-[1px] bg-secondary" />

              <div className=" flex items-center gap-2 p-[6px] ">
                <FaDiscord className=" text-accent" size={22} />{" "}
                <p className="    font-medium  ">Discord</p>
              </div>

              <div className="my-2 h-[1px] bg-secondary" />

              <div className="flex items-center gap-2 p-[6px]  ">
                <MdMail className=" text-accent" size={22} />{" "}
                <p className="   font-medium  ">Mail</p>
              </div>

              <div className="my-2 h-[1px] bg-secondary" />

              <div className="flex items-center gap-2 p-[6px]  ">
                <FaInstagram className=" text-accent" size={22} />{" "}
                <p className="  font-medium  ">Instagram</p>
              </div>
            </div>
          </div>
          {/* CONTINUE TO WORKOUTS */}
          <div className="  flex  flex-1 flex-col bg-primary p-6  ">
            <p className="flex items-center gap-2 font-medium  capitalize ">
              Minutes stretched this week
            </p>
          </div>
        </div>
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
      className={`${className} flex items-center justify-center rounded-sm bg-primary px-6 py-10 focus-within:bg-secondary hover:bg-secondary `}
    >
      <div className="mr-20 flex flex-col gap-2">
        <div>{icon}</div>

        <div className="text-2xl font-semibold">{title}</div>

        <p className=" min-w-max font-medium text-accent">Workout Accuracy</p>
      </div>

      <div className="  flex flex-col items-center justify-center  gap-3">
        {/* <ProgressCircle progress={50} /> */}

        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-accent text-xl font-medium">
          50%{" "}
        </div>
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
