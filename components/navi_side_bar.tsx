import Link from "next/link";

import PISD_Logo from "./svg_hold";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { IconMenu2 } from "@tabler/icons-react";

export default function NavSideBar() {
  return (
    <div className=" md:hidden flex  gap-5 px-5 py-3  justify-between items-center">
      <Link href="/">
        <PISD_Logo
          width={150}
          className="text-[#345995] dark:text-white cursor-pointer"
        />
      </Link>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon">
            <IconMenu2 />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>

          <nav className="flex items-start flex-col gap-3 no-scrollbar overflow-y-auto px-4  text-[#345995] dark:text-white ">
            <MenuItem name="Home" href="/" />
            <MenuItem name="About Us" href="/about_us" />
            <MenuItem name="What We Do" href="/what_we_do" />
            <MenuItem name="Where We Work" href="/where_we_work" />
            <MenuItem name="Contact Us" href="/contact_us" />
          </nav>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

function MenuItem({ name, href }: { name: string; href: string }) {
  return (
    <DrawerClose asChild>
      <Button asChild variant="link">
        <Link href={href} className=" group-hover:text-black transition-colors">
          {name}
        </Link>
      </Button>
    </DrawerClose>
  );
}
