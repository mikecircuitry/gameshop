import { NextRequest } from "next/server";


export function middleware(req : NextRequest): void {

const {pathname} = req.nextUrl;
if (pathname.startsWith("/_next/")) return ;
console.log("PATHNAME ==>", pathname);
console.log("CURRENT-REQUEST ==>", req.url);
}
