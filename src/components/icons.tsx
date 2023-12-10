import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  ChevronLeftSquare,
  Info,
  LogOut,
  LucideProps,
  Minus,
  Moon,
  Play,
  Plus,
  Search,
  Sun,
  Tv,
  X,
} from "lucide-react";

import { IconBrandDiscord } from "@irsyadadl/paranoid";
import { cn } from "@/lib/utils";

const DashiconsGoogle = ({ className, ...props }: LucideProps) => (
  <svg
    width="1em"
    height="1em"
    className={cn("fill-foreground", className)}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M17.6 8.5h-7.5v3h4.4c-.4 2.1-2.3 3.5-4.4 3.4c-2.6-.1-4.6-2.1-4.7-4.7c-.1-2.7 2-5 4.7-5.1c1.1 0 2.2.4 3.1 1.2l2.3-2.2C14.1 2.7 12.1 2 10.2 2c-4.4 0-8 3.6-8 8s3.6 8 8 8c4.6 0 7.7-3.2 7.7-7.8c-.1-.6-.1-1.1-.3-1.7z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const Icons = {
  logo: ChevronLeftSquare,
  close: X,
  moon: Moon,
  sun: Sun,
  play: Play,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  tv: Tv,
  info: Info,
  logout: LogOut,
  search: Search,
  bookmark: Bookmark,
  discord: IconBrandDiscord,
  google: DashiconsGoogle,
  plus: Plus,
  minus: Minus,
};
