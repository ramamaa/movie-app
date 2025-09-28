import { ThemeToggler, NavigationMenuDemo } from "@/components/my";
import { Film, Search } from "lucide-react";
import { SearchSection } from "../main/SearchSection";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-between items-center px-20 py-5 w-[1440px] mx-auto">
      <div className="flex gap-2">
        <Link href="/">
          <Film className="w-5 h-5 text-indigo-700" />
        </Link>
        <Link className="text-indigo-700 text-base font-bold" href="/">
          Movie Z
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <NavigationMenuDemo />
        <div className="relative flex gap-2.5">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <SearchSection />
        </div>
      </div>
      <ThemeToggler />
    </div>
  );
};
