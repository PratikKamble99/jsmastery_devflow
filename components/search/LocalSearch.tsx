"use client";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/url";
import { useRouter } from "next/navigation";

interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  iconPosition: "left" | "right";
  otherClasses?: string;
}

const LocalSearch = ({ route, imgSrc, placeholder, iconPosition, otherClasses }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [searchQuery, setSearchQuery] = useState(query || "");

  useEffect(() => {
    const debouncedTimer = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({ params: searchParams.toString(), key: "query", value: searchQuery });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromQuery({ params: searchParams.toString(), keysToRemove: ["query"] });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);
    return () => clearTimeout(debouncedTimer);
  }, [searchQuery, route, pathname, router]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && <Image src={imgSrc} alt="search" width={24} height={24} className="cursor-pointer" />}

      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-hidden"
      />
      {iconPosition === "right" && (
        <Image src={imgSrc} alt="search" width={15} height={15} className="cursor-pointer" />
      )}
    </div>
  );
};

export default LocalSearch;
