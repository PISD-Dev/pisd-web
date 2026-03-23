import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconBrandLinkedinFilled,
  IconMail,
  IconMailFilled,
} from "@tabler/icons-react";

import PISD_Logo from "./svg_hold";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-amber-50 p-5 flex flex-col gap-5 ">
      <div className="my-auto text-[#345995]  dark:text-white">
        <PISD_Logo width={300} className="" />
      </div>
      <div className="flex items-start flex-col gap-3 py-2 ">
        <FooterMenuItem name="Home" href="/" />
        <FooterMenuItem name="About Us" href="/about_us" />
        <FooterMenuItem name="What We Do" href="/what_we_do" />
        <FooterMenuItem name="Where We Work" href="/where_we_work" />
        <FooterMenuItem name="Contact Us" href="/contact_us" />
      </div>
      <div className=" text-[#697c9d] flex flex-col gap-2 pt-10">
        <div className="font-bold">Follow us:</div>
        <div className="flex flex-row gap-2">
          <a
            href="https://www.facebook.com/pisdofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandFacebook className="group-hover:hidden" />
            <IconBrandFacebookFilled
              stroke={1.5}
              className="hidden  group-hover:inline group-hover:scale-125 transition-transform"
            />
          </a>
          <a
            href="mailto:info@pisd.org.ph"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconMail className="group-hover:hidden" />
            <IconMailFilled
              stroke={1.75}
              className="hidden  group-hover:inline group-hover:scale-125 transition-transform"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/pisdofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin className="group-hover:hidden" />
            <IconBrandLinkedinFilled
              stroke={1.75}
              className="hidden  group-hover:inline group-hover:scale-125 transition-transform"
            />
          </a>
        </div>
      </div>
      {/*<Separator className="text-[#345995]"/>
      <div>
        Privacy Policy
      </div>*/}
    </footer>
  );
}
function FooterMenuItem({ name, href }: { name: string; href: string }) {
  return (
    <Link
      href={href}
      className="hover:underline text-[#345995]  dark:text-white"
    >
      {name}
    </Link>
  );
}
