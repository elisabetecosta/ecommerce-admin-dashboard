import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
      publicRoutes: ['/api/:path*'],
      // ignoredRoutes: ['/api/:path*'],
      // debug: true
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 