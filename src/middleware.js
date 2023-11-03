// middleware is applied to all routes, use conditionals to select
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    console.log("Incoming request:", req.method, req.url);
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // console.log(
        //   "authorized",
        //   req.nextUrl.pathname,
        //   token
        //   // req.nextUrl.pathname?.split("/")
        // );
        // console.log(
        //   "here is the token",
        //   req.nextUrl.pathname.split("/dashboard")[1]
        // );
        // console.log(
        //   "token",
        //   req.nextUrl.pathname.split("/dashboard")?.[1],
        //   req.nextUrl.pathname.split("/question")?.[1]
        // );
        const a = req.nextUrl.pathname.split("/dashboard")?.[1];
        const nextSession = req.cookies.get("next-auth.session-token");
        const nextSessionSecure = req.cookies.get(
          "__Secure-next-auth.session-token"
        );
        console.log(
          "path in middleware",
          a,
          "is wrong login? ",
          !(nextSession || nextSessionSecure)
        );
        if (
          (a?.length > 0 && token?.user?.username != "admin") ||
          !(nextSession || nextSessionSecure)
        ) {
          console.log("redirecting to /");
          return false;
        }
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/question/:path*"],
};
