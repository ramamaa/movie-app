import { ThemeToggler, NavigationMenuDemo } from "@/components/my";
import { Film, Search } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex justify-between items-center px-20 py-5 w-[1440px] mx-auto">
      <div className="flex gap-2">
        <a href="/">
          <Film className="w-5 h-5 text-indigo-700" />
        </a>
        <a className="text-indigo-700 text-base font-bold" href="/">
          Movie Z
        </a>
      </div>
      <div className="flex gap-3 ">
        <NavigationMenuDemo />
        <div className="relative flex gap-2.5">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder=" Search"
            className="text-muted-foreground border border-[#27272A] pl-9 w-[380px] radius rounded-lg"
          />
        </div>
      </div>
      <ThemeToggler />
    </div>
  );
};
