import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|static|favicon.ico|public-route|api/webhooks/clerk).*)",
  ],
};
