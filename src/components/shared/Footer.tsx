import Image from "next/image";
import Link from "next/link";

const infoArray = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Term & Conditions",
    href: "/term",
  },
  {
    title: "Privacy Policy",
    href: "/policy",
  },
  {
    title: "Press",
    href: "/press",
  },
];

const categoryArray = [
  {
    title: "Videos",
    href: "/videos",
  },
  {
    title: "Gaming",
    href: "/gaming",
  },
  {
    title: "Travel",
    href: "/travel",
  },
  {
    title: "Music",
    href: "/music",
  },
  {
    title: "Sports",
    href: "/sports",
  },
];

const Information = ({ category }: { category?: boolean }) => {
  return (
    <div className="flex flex-col text-gray-300">
      {category
        ? categoryArray.map((item) => (
            <Link
              href={item.href}
              title={item.title}
              className="hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 group:"
            >
              <span className="w-2 h-2 rounded-full inline-flex border border-red-700"></span>
              {item.title}
            </Link>
          ))
        : infoArray.map((item) => (
            <Link
              href={item.href}
              title={item.title}
              className="hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 group:"
            >
              <span className="w-2 h-2 rounded-full inline-flex border border-red-700"></span>
              {item.title}
            </Link>
          ))}
    </div>
  );
};

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

      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          Information
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10"></span>
        </h2>
        <Information />
      </div>

      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          Category
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10"></span>
        </h2>
        <Information category={true} />
      </div>

      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          Connect with US
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10"></span>
        </h2>
        <div>
          <p>
            Phone: <span className="text-white font-medium">0903322117</span>
          </p>
          <p>
            Email:
            <span className="text-white font-medium">
              freemandev10@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
