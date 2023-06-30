import { useUser } from "@clerk/nextjs";
import React from "react";
import Card from "~/components/ui/Card";
import withLayout from "~/components/Layout";
import Input from "~/components/ui/Input";
import { Username } from "~/components/ui/UserAttributes";

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
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />{" "}
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />{" "}
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />{" "}
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />{" "}
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />{" "}
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />{" "}
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />{" "}
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />{" "}
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />{" "}
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />{" "}
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />{" "}
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />
        <ChartContainer
          title="bro"
          icon={<div>a</div>}
          increase="20"
          progress="40"
          subtitle="yooooo"
          className="p-8"
        />
      </div>
    </div>
  );
}

function ChartContainer({
  className,
  title,
  subtitle,
  progress,
  increase,
  icon,
}: {
  className?: string;
  title: string;
  subtitle: string;
  progress: string;
  increase: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={`${className} flex items-center justify-center bg-indigo-900/20 `}
    >
      <div className="w-full">
        <div className="flex justify-between">
          <div>
            {icon}

            <div className="font-bold ">{title}</div>
          </div>

          <div>
            <ProgressCircle size="40" progress={progress} />
          </div>
        </div>

        <div className=" flex justify-between">
          <p>{subtitle}</p>

          <p className="italic">{increase}</p>
        </div>
      </div>
    </div>
  );
}

const ProgressCircle = ({
  progress = "0.75",
  size = "40",
}: {
  progress: string;
  size: string;
}) => {
  const angle = parseInt(progress) * 360;
  return <div />;
};

export default withLayout(home);
