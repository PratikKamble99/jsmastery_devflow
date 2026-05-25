"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const LogOutButton = () => {
  return (
    <Button
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
