import LogOutButton from "@/components/shared/button/LogOutButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("Session:", session);
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-light-500">Welcome to Next.js!</h1>
      <LogOutButton />
    </div>
  );
}
