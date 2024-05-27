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
import { Genres } from "../../../type";

const GenreDropDown = async () => {
  const url = `${process.env.TMBD_URL}/3/genre/movie/list?language=en`;
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMBD_READ_ACCESS_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex items-center text-sm font-medium">
        <AlignCenter className="ml-1" size={20} />
        <DropdownMenuContent>
          <DropdownMenuLabel>Select</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {data?.genres?.map((genre) => (
            <Link
              key={genre.id}
              href={`/genre/${genre.id}?genre=${genre.name}`}
            >
              <DropdownMenuItem>{genre.name}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default GenreDropDown;
