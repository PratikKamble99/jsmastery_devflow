import Navbar from "@/components/navigation/navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="pt-20">{children}</div>
    </main>
  );
};

export default RootLayout;
