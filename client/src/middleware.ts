import { authMiddleware } from "@clerk/nextjs";
//https://clerk.com/docs/nextjs/middleware#making-pages-public-using-public-routes

export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
