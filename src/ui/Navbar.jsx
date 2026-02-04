import { Button } from "@/components/ui/button";
import React from "react";
import SearchInput from "./SearchInput";
// import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge, Bell, BellRing, Moon } from "lucide-react";
export default function Navbar() {
  return (
    <>
      <nav className=" fixed top-0 bottom-0 left-[25%] right-0   h-16   bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="flex h-full items-center justify-between px-20">
          {/* LEFT — Search */}
          <div className="w-[45%] max-w-lg">
            <SearchInput />
          </div>

          {/* CENTER — Actions */}
          <div className="flex items-center gap-7">
            {/* Mode */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="
                  relative
                  hover:bg-transparent
                  focus:outline-none
                  focus:ring-0
                  focus-visible:outline-none
                  focus-visible:ring-0
                  focus-visible:ring-offset-0
                  data-[state=open]:bg-transparent
                "
                >
                  <Moon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-4 w-4 p-0 text-[10px]"
                  >
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 border border-gray-200 dark:border-gray-700 shadow-md">
                {/* API items */}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="
                  relative
                  hover:bg-transparent
                  focus:outline-none
                  focus:ring-0
                  focus-visible:outline-none
                  focus-visible:ring-0
                  focus-visible:ring-offset-0
                  data-[state=open]:bg-transparent
                "
                >
                  <Bell className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-4 w-4 p-0 text-[10px]"
                  >
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 border border-gray-200 dark:border-gray-700 shadow-md">
                {/* API items */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* RIGHT — Admin */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
                <img
                  src="/avatar.png"
                  alt="User"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="text-left leading-tight hidden sm:block">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    John Doe
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Administrator
                  </p>
                </div>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-48 border border-gray-200 dark:border-gray-700 shadow-md"
            >
              {/* Admin menu */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
}
