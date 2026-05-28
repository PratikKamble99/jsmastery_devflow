import AUTH_PROVIDERS from "@/constants/auth-providers";
import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

export type PROVIDER = (typeof AUTH_PROVIDERS)[keyof typeof AUTH_PROVIDERS];

export const signIn = async (provider: PROVIDER) => {
  const data = await authClient.signIn.social({
    provider: provider.toLowerCase(),
  });
};

export const signOut = async () => {
  return await authClient.signOut();
};

export const getSession = async () => {
  return await authClient.getSession();
};
