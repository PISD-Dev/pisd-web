import { Icon_PHP_donate } from "@/components/svg_hold";
import { Button } from "@/components/ui/button";
import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconBrandLinkedinFilled,
  IconEmpathize,
  IconMail,
  IconMailFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/navi_bar";
import NavSideBar from "@/components/navi_side_bar";

export default function Home() {
  return (
    <main className="flex flex-col bg-white dark:bg-black sm:items-start">
      <div className="flex flex-col w-full min-h-screen">
        <NavBar />
        <NavSideBar />
        <div className="bg-[#345995] text-white py-2 text-center text-xl md:py-3 md-">
          Student Power is People Power
        </div>

        <div
          className="relative flex-1 bg-cover bg-center "
          style={{ backgroundImage: "url(/img/home-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute z-10 h-full w-full content-end text-white p-10">
            <div className="flex flex-col md:flex-row gap-5 justify-center ">
              <Button className="flex items-center gap-2 rounded-4xl bg-[#9B2242] hover:bg-[#741a32] text-md md:text-xl  py-3 md:py-6">
                <IconEmpathize className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
                <span>Be a Volunteer</span>
              </Button>
              <Button className="flex items-center gap-2 rounded-4xl bg-[#F2CD00] text-black hover:bg-[#caac01] text-md md:text-xl px-5 py-3 md:py-6">
                <Icon_PHP_donate className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
                <span>Be a Donor</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section
        id="who-are-we"
        className="flex flex-col bg-[#345995] text-white w-full  p-10  items-center"
      >
        <div className="text-center text-xl font-bold md:text-4xl">
          WHAT WE DO
        </div>

        <div className="grid  gap-5 py-5 px-10 md:px-0 md:grid-cols-3 md:gap-20">
          <InfoCard
            imageSrc="/img/voter_ed.jpg"
            alt="balota group picture"
            title="Voter Education"
            description="This year, our top priority is empowering first-time student
                voters aged 15–24 in the upcoming BSKE in November 2026."
          />
          <InfoCard
            imageSrc="/img/rd.jpg"
            alt="Isaiah Interview"
            title="Research & Data"
            description="We conduct research on critical issues like voter turnout and
                sentiment analysis to understand how they affect student
                participation in our democracy."
          />
          <InfoCard
            imageSrc="/img/tech_tool.png"
            alt="nosi balasi"
            title="Tech & Tools"
            description="We don't just study problems—we build apps and digital
                tools to make advocacy and democratic engagement easier. Like
                Nosibalasi, which reached over 700k users in the last midterm
                elections."
          />
        </div>
      </section>

      {/*<section id="what-we-do" className="flex flex-col bg-[#47A23F] text-white w-full px-10 md:px-20 py-10  items-center">
        <div className="text-center text-xl font-bold ">WHAT WE DO</div>
        <div className="text-left md:mx-10 lg:mx-40 text-lg space-y-6">
          <div>
            <h3 className="font-semibold text-xl">Voter Education</h3>
            <p>
              This year, our top priority is empowering first-time student
              voters aged 15–24 in the upcoming BSKE in November 2026.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Research & Data</h3>
            <p>
              We conduct research on critical issues like voter turnout and
              sentiment analysis to understand how they affect student
              participation in our democracy.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Tech & Tools</h3>
            <p>
              We don&apos;t just study problems—we build apps and digital tools
              to make advocacy and democratic engagement easier. Like
              Nosibalasi, which reached over 700k users in the last midterm
              elections.
            </p>
          </div>
        </div>
      </section>
      <section id="work-with" className="flex flex-col bg-[#9B2242] text-white w-full px-10 md:px-20 py-10  items-center">
        <div className="text-center text-xl font-bold ">
          WHO DO WE WORK WITH?
        </div>
        <div className="text-center md:mx-10 lg:mx-40 text-lg">
          <p>
            We believe that student democracy is fundamental to nation building
            and to that end we work with the four pillars of student democracy
            namely: Student Governments, Student Publications, Student Electoral
            Boards, Student Organizations.
          </p>
          <p>
            We also work directly with Student Affairs Offices as well as Social
            Action Offices alongside other youth organizations outside of
            schools, LYDO, LYDC, SK, and even government agencies.
          </p>
        </div>
      </section>
      <section id="why-pisd" className="flex flex-col bg-[#CCB11D] text-white w-full px-10 md:px-20 py-10  items-center">
        <div className="text-center text-xl font-bold ">
          WHY DID WE ESTABLISH PISD?
        </div>
        <p className="text-center md:mx-10 lg:mx-40 text-lg">
          We are the Philippine Institute for Student Democracy (PISD) Inc. We
          are an SEC-registered, non-stock, non-profit, and non-partisan
          research institute that promotes and protects students&apos;
          democratic rights and freedoms and advances student democracy.
        </p>
      </section>*/}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
        <div className="  flex flex-col align items-center gap-3 px-8">
          <div className="text-[#345995] font-bold text-2xl">WHO ARE WE?</div>
          <div className="flex gap-5 ">
            <div className="flex-1 text-center">
              The Philippine Institute for Student Democracy (PISD) Inc. is a
              SEC-registered, non-stock, non-profit, and non-partisan research
              institute that promotes and protects students&apos; democratic
              rights and freedoms and advances student democracy.
            </div>
          </div>
        </div>
        <div className=" flex flex-col  align items-center gap-3 ">
          <div className="text-[#345995] font-bold text-2xl">
            FEATURED PHOTOS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-5">
            <div className="w-100 h-80 md:w-40 md:h-40 relative shrink-0">
              <Image
                src="/img/feat_1.jpg"
                alt="PISD at September 21 Protest"
                fill
                className="object-cover rounded-lg object-[53%_50%]"
                loading="lazy"
              />
            </div>
            <div className="w-100 h-80 md:w-40 md:h-40 relative shrink-0">
              <Image
                src="/img/feat_2.jpg"
                alt="PISD at September 21 Protest"
                fill
                className="object-cover rounded-lg object-[53%_50%]"
                loading="lazy"
              />
            </div>
            <div className="w-100 h-80 md:w-40 md:h-40 relative shrink-0">
              <Image
                src="/img/feat_3.jpg"
                alt="UPOU Town Hall"
                fill
                className="object-cover rounded-lg object-[50%_0%]"
                loading="lazy"
              />
            </div>
            <div className="w-100 h-80 md:w-40 md:h-40 relative shrink-0">
              <Image
                src="/img/sp_pp.jpg"
                alt="40th People Power Anniv"
                fill
                className="object-cover rounded-lg object-[50%_0%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-col  align items-center gap-3 px-8">
          <div className="text-[#345995] font-bold text-2xl">
            WHO DO WE WORK WITH?
          </div>
          <div className="flex gap-5 ">
            <div className="flex-1 text-center">
              We believe that student democracy is fundamental to nation
              building and to that end we work with the four pillars of student
              democracy, namely, Student Governments, Student Publications,
              Student Electoral Boards, and Student Organizations.
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center text-center gap-4 px-8 rounded-2xl">
          <h2 className="text-[#345995] font-bold text-2xl">
            LET&apos;S CONNECT!
          </h2>

          <p className="text-sm max-w-sm text-[#345995]/80">
            Reach out to collaborate, ask questions, or learn more about what we
            do.
          </p>

          <Button
            asChild
            size="sm"
            className="bg-[#345995] text-white hover:bg-[#2a4777] text-md px-6 py-2 rounded-lg"
          >
            <Link href="mailto:info@pisd.org.ph">Contact Us</Link>
          </Button>

          <div className="flex gap-4 pt-2 text-[#345995]">
            <a
              href="https://www.facebook.com/pisdofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-6 h-6 flex items-center justify-center"
            >
              <IconBrandFacebook className="group-hover:hidden " />
              <IconBrandFacebookFilled className="hidden group-hover:inline " />
            </a>

            <a
              href="mailto:info@pisd.org.ph"
              className="group w-6 h-6 flex items-center justify-center"
            >
              <IconMail className="group-hover:hidden" />
              <IconMailFilled className="hidden group-hover:inline " />
            </a>

            <a
              href="https://www.linkedin.com/company/pisdofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-6 h-6 flex items-center justify-center"
            >
              <IconBrandLinkedin className="group-hover:hidden" />
              <IconBrandLinkedinFilled className="hidden group-hover:inline " />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoCard({
  imageSrc,
  alt,
  title,
  description,
}: {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-100 md:w-50 lg:w-80">
        <div className="relative h-100 md:h-50 lg:h-80 shrink-0">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover rounded-lg object-[50%_80%]"
            loading="lazy"
          />
        </div>

        <div className="text-center py-5">
          <h3 className="font-semibold text-xl">{title}</h3>
          <p className="md:text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
