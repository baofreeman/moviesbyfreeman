import Image from "next/image";
import Link from "next/link";
import GenreDropDown from "./GenreDropDown";
import SearchInput from "./SearchInput";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between p-5 bg-[#12121280] gap-4 md:gap-0 sticky z-50 top-0 backdrop-blur-2xl transition-colors">
      <Link href={"/"}>
        <Image
          src={
            "https://streamtube.marstheme.com/wp-content/uploads/2021/09/logo-dark.png"
          }
          alt="logo"
          width={120}
          height={100}
          priority={true}
          className="cursor-pointer"
        />
      </Link>
      <div className="text-white flex gap-4">
        <GenreDropDown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
