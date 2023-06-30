import React from "react";
import * as RadixAvatar from "@radix-ui/react-avatar";
import LoadingSpinner from "./Loading";
import { useUser } from "@clerk/nextjs";

function Avatar({ src, fallbackUsername, loading, className }: AvatarProps) {
  function AvatarSkeleton() {
    return (
      <>
        <div
          className={`${className} flex   items-center justify-center  rounded-full`}
        >
          {" "}
          <LoadingSpinner />
        </div>
      </>
    );
  }

  return (
    <RadixAvatar.Root className=" h-10 w-10   rounded-full bg-indigo-600 align-middle">
      {!loading ? (
        <>
          <RadixAvatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            alt="Colm Tuite"
            src={src}
          />
          <RadixAvatar.Fallback
            className="leading-1 tex t-indigo-700 flex h-full w-full items-center justify-center rounded-full bg-indigo-600 font-medium   text-white"
            delayMs={600}
          >
            {fallbackUsername}
          </RadixAvatar.Fallback>
        </>
      ) : (
        <AvatarSkeleton />
      )}
    </RadixAvatar.Root>
  );
}

//this is so i dont have to repeat that isloaded logic everytime I have to use the username
export function Username(className: { className?: string }) {
  const { user, isLoaded } = useUser();

  return isLoaded ? <p>{user?.username}</p> : <LoadingSpinner />;
}

interface AvatarProps {
  src: string;
  fallbackUsername: string;
  loading: boolean;
  className?: string;
}

export default Avatar;
