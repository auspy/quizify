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
        //   // token,
        //   // req.nextUrl.pathname?.split("/")
        // );
        const nextSession = req.cookies.get("next-auth.session-token");
        if (
          // req.nextUrl.pathname?.split("/").filter((item) => item).length > 1 &&
          !nextSession
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
  matcher: ["/dashboard/:path*"],
};
