import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#191919] px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          About us{" "}
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10"></span>
        </h2>
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
        <p className="text-gray-200 text-sm leading-6 tracking-wide mt-5 max-w-72">
          Pellentesque suscipit pellentesque luctus. Nulla vel tellus nec risus
          tempus feugiat. Donec nibh orci, sollicitudin sit amet gravida at,
          varius sit amet sem.
        </p>
      </div>
    </div>
  );
};

export default Footer;
