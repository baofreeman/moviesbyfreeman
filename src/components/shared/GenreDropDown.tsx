import { AlignCenter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

const GenreDropDown = () => {
  const genreArraay = [
    { id: 102, name: "action" },
    { id: 103, name: "animation" },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex items-center text-sm font-medium">
        <AlignCenter className="ml-1" size={20} />
        <DropdownMenuContent>
          <DropdownMenuLabel>Select</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {genreArraay.map((item) => (
            <DropdownMenuItem key={item.id}>
              <Link href={`/genre/${item.id}?genre=${item.name}`}>
                {item.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default GenreDropDown;
