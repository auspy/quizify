import { getServerSession } from "next-auth/next";
import { authOptions } from "./route";

export function auth(...args) {
  return getServerSession(...args, authOptions);
}
