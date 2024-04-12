import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/contact-us",
    "/privacy-policy",
    "/cookie-policy",
    "/terms-and-conditions",
    "/pricing",
    "/login",
    "/test", //CHANGE: THIS IMPLIES TO RECUITER ROUTE, REMOVE THIS LATER TO MAKE IT PROTECTED
    "/test2", //CHANGE: THIS IMPLIES TO CANDIDATE ROUTE, REMOVE THIS LATER TO MAKE IT PROTECTED,
  ],
  // Routes that can always be accessed, and have
  // no authentication information
  //   ignoredRoutes: ["/hello"],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
