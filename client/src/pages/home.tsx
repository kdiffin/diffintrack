import { useUser } from "@clerk/nextjs";
import React from "react";
import Card from "~/components/Card";
import withLayout from "~/components/Layout";
import Input from "~/components/ui/Input";

function home() {
  const { user } = useUser();
  return (
    <div className="px-6">
      <div className="mb-6">
        <p className="mb-2 text-3xl font-bold text-white ">{user?.username}</p>
        <p className="font-medium text-indigo-300">
          Welcome to the your tracker
        </p>
      </div>

      <div>
        <Card />
      </div>
    </div>
  );
}

export default withLayout(home);
