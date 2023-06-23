import React from "react";
import * as RadixAvatar from "@radix-ui/react-avatar";

function Avatar() {
  return (
    <RadixAvatar.Root className=" h-10 w-10   rounded-full bg-indigo-600 align-middle">
      <RadixAvatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src="https://diffinlist.vercel.app/_next/image?url=https%3A%2F%2Fimages.clerk.dev%2Foauth_github%2Fimg_2QidHtU08HRUTXrX3nM1QTkjTBz.png&w=256&q=75"
        alt="Colm Tuite"
      />

      <RadixAvatar.Fallback
        className="leading-1 tex t-indigo-700 flex h-full w-full items-center justify-center rounded-full bg-indigo-600 font-medium   text-white"
        delayMs={600}
      >
        CT
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
}

export default Avatar;
