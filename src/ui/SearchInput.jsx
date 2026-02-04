import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

export default function SearchInput() {
  return (
    <div className="relative">
      <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

      <Input
        type="search"
        placeholder="Search"
        className="
      border-0
      text-gray-900
      placeholder:text-gray-500
      focus-visible:border-0
      focus-visible:ring-0
      h-11
       w-[100%]
    "
      />
    </div>
  );
}
