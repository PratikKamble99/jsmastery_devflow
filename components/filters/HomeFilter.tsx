"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/url";
import { useRouter } from "next/navigation";

const filters = [
  { label: "Newest", value: "newest" },
  { label: "Recommended", value: "recommended" },
  { label: "Frequent", value: "frequent" },
  { label: "Unanswered", value: "unanswered" },
];

const HomeFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filter = searchParams.get("filter");
  const [activeFilter, setActiveFilter] = useState(filter || "");

  const handleFilterChange = (filterValue: string) => {
    if (filterValue === activeFilter) {
      setActiveFilter("");
      const newUrl = removeKeysFromQuery({ params: searchParams.toString(), keysToRemove: ["filter"] });
      router.push(newUrl);
    } else {
      setActiveFilter(filterValue);
      const newUrl = formUrlQuery({ params: searchParams.toString(), key: "filter", value: filterValue });
      router.push(newUrl);
    }
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          className={`body-medium cursor-pointer rounded-lg px-6 py-3 capitalize shadow-none ${activeFilter === filter.value ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400" : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-700 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"}`}
          onClick={() => handleFilterChange(filter.value)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
