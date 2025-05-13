import { SIDEBAR_MENU } from "@/constants/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  slug: string;
  page: string;
};

const Items = ({ slug, page }: Props) => {
  return (
    <div>
      {SIDEBAR_MENU.map((item) => {
        return (
          <Link
            key={item.id}
            href={`/dashboard/${slug}/${
              item.label === "home" ? "/" : item.label
            }`}
            className={cn(
              "capitalize flex gap-x-2 rounded-full p-3",
              page === item.label && "bg-[#171717]",
              page === slug && item.label === "home" && "bg-[#171717]"
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Items;
