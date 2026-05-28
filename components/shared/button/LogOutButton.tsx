"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const LogOutButton = () => {
  return (
    <Button
      className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full cursor-pointer rounded-lg border px-4 py-3 shadow-none"
      onClick={async () => {
        await signOut();
        redirect("/sign-in");
      }}
    >
      logout
    </Button>
  );
};

export default LogOutButton;
