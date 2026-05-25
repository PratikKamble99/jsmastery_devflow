"use client";

import Image from "next/image";
import React from "react";

import { Button } from "../ui/button";
import AUTH_PROVIDERS from "@/constants/auth-providers";
import { toast } from "sonner";
import { PROVIDER, signIn } from "@/lib/auth-client";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const handleAuth = async (provider: PROVIDER) => {
    // Implement the logic to handle authentication with the selected provider
    console.log(`Logging in with ${provider}`);
    try {
      //   throw new Error("Auth not configured"); // Simulate an error for demonstration
      const data = await signIn(provider);
    } catch (error) {
      console.error(`Error occurred while logging in with ${provider}:`, error);
      toast.error("Failed to log in", {
        description: error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleAuth(AUTH_PROVIDERS.GITHUB)}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>

      <Button className={buttonClass} onClick={() => handleAuth(AUTH_PROVIDERS.GOOGLE)}>
        <Image src="/icons/google.svg" alt="Google Logo" width={20} height={20} className="mr-2.5 object-contain" />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
