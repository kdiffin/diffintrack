import { useUser } from "@clerk/nextjs";
import React from "react";
import Card from "~/components/ui/Card";
import withLayout from "~/components/Layout";
import Input from "~/components/ui/Input";
import { Username } from "~/components/ui/UserAttributes";

function home() {
  const { user } = useUser();
  return (
    <div className="px-6">
      <div className="mb-6">
        <div className="mb-2 text-3xl font-bold text-white ">
          <Username />
        </div>
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
