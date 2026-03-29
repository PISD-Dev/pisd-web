import Link from "next/link";

import PISD_Logo from "./svg_hold";

export default function NavBar() {
  return (
    <div className="hidden md:flex    flex-row gap-5 p-5 px-10 items-center ">
      <Link href="/">
        <PISD_Logo
          width={300}
          className="text-[#345995] dark:text-white cursor-pointer"
        />
      </Link>
      <nav className="flex gap-6 px-10  text-[#345995] dark:text-white ">
        <MenuItem name="Home" href="/" />
        <MenuItem name="Who We Are" href="#who-are-we" />
        <MenuItem name="What We Do" href="#what-we-do" />
        <MenuItem name="Our Partners" href="#work-with" />
        <MenuItem name="Why we Exist" href="#why-pisd" />
        <MenuItem name="Contact Us" href="/contact_us" />
      </nav>
    </div>
  );
}

function MenuItem({ name, href }: { name: string; href: string }) {
  return (
    <div>
      <p className=" relative group inline-block px-0.5">
        <Link
          href={href}
          className="relative z-10 group-hover:text-black transition-colors"
        >
          {name}
        </Link>
        <span className="absolute rounded-t-lg px-2 left-0 bottom-0 w-full h-0.5 bg-blue-500 -z-10 group-hover:h-full group-hover:transition-all"></span>
      </p>
    </div>
  );
}
