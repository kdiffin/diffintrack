import Head from "next/head";
import Link from "next/link";
import LandingPage from "~/components/LandingPage";
import Navbar from "~/components/Navbar";
import { useRouter } from "next/router";
import { useAuth, useUser } from "@clerk/clerk-react";

import { getAuth, buildClerkProps } from "@clerk/nextjs/server";
import { GetServerSideProps } from "next";

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { userId } = getAuth(ctx.req);

//   if (userId) {
//     return {
//       redirect: {
//         destination: "/home",
//         permanent: false,
//       },
//     };
//   }
//   return { props: { ...buildClerkProps(ctx.req) } };
// };

export default function Index() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="background-homepage flex min-h-screen flex-col  bg-gray-900 px-8 pb-4 text-white">
        <LandingPage />
      </div>
    </>
  );
}
