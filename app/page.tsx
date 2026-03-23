import { Icon_PHP_donate } from "@/components/svg_hold";
import { Button } from "@/components/ui/button";
import { IconEmpathize } from "@tabler/icons-react";
import ProjectDescriptionWidget, {
  lorem,
} from "../components/project_description";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/navi_bar";
import NavSideBar from "@/components/navi_side_bar";

export default function Home() {
  return (
    <main className="flex flex-col bg-white dark:bg-black sm:items-start">
      <div className="flex flex-col w-full min-h-screen">
        
        <NavBar />
        <div className="bg-[#345995] text-white py-3 text-center text-2xl">
          Lorem Ipsum Dolor
        </div>

        <div
          className="relative flex-1 bg-cover bg-center "
          style={{ backgroundImage: "url(/img/DSC_9692.JPG)" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute z-10 h-full w-full content-end text-white p-10">
            <div className="flex row gap-5 justify-center">
              <Button className="rounded-4xl bg-[#9B2242] hover:bg-[#741a32] text-md p-5">
                <IconEmpathize /> Be a Volunteer
              </Button>
              <Button className="rounded-4xl bg-[#F2CD00] text-black hover:bg-[#caac01] text-md p-5">
                <Icon_PHP_donate /> Be a Donor
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#345995] text-white w-full px-20 py-3 flex flex-col items-center">
        <div className="text-center text-xl font-bold">
          君と相場がゾキュンドキュン走り出し。
        </div>
        <div className="flex flex-row  gap-5">
          <ProjectDescriptionWidget
            alt_text="Image of EDSA Monument"
            description="これから先のもっと先を描いた地図はないんだろうか? 迷いはしないだろうか それでいいから そのままでいいから本はいらなかったものもソファも本も捨てよう Ooh hoo ah ah 町へ出よう"
            imageLink="/img/edsa-monu.jpg"
          />
          <ProjectDescriptionWidget
            alt_text="Philippine Flag"
            description="火星へランデヴー普通の日々 普通のシンパシー僕が見たいのはふざけた嵐だけ"
            imageLink="/img/flag.jpg"
          />
          <ProjectDescriptionWidget
            alt_text="Image of a booth with the newspaper headline 'Marcos Flees'"
            description="はらり 僕らもう息も忘れて瞬きさえ億劫さぁ 今日さえ明日過去に変わるただ風を待つ"
            imageLink="/img/marcos-flees.jpg"
          />
          <ProjectDescriptionWidget
            alt_text="Image of protest in the background with the camera focused on a man"
            description={lorem}
            imageLink="/img/protest.jpg"
          />
        </div>
      </div>

      <div className="grid grid-rows-2 w-full p-5 ">
        <div className="grid grid-cols-2 text-center ">
          <div className="flex flex-col  align items-center gap-3 p-5">
            <div className="text-[#345995] font-bold text-lg">Lorem Ipsum</div>
            <div className="flex gap-5 px-25">
              <Image
                src="/img/flag.jpg"
                alt="placeholder"
                objectFit="cover"
                width={200}
                height={200}
                loading="lazy"
                className="px-3 shrink-0"
              />
              <div className="flex-1 line-clamp-3 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
            </div>
          </div>
          <div className="flex flex-col  align items-center gap-3 p-5">
            <div className="text-[#345995] font-bold text-lg">
              Featured Photos
            </div>
            <div className="flex gap-5">
              <Image
                src="/img/flag.jpg"
                alt="placeholder"
                objectFit="cover"
                width={200}
                height={200}
                loading="lazy"
              />
              <Image
                src="/img/flag.jpg"
                alt="placeholder"
                objectFit="cover"
                width={200}
                height={200}
                loading="lazy"
              />
              <Image
                src="/img/flag.jpg"
                alt="placeholder"
                objectFit="cover"
                width={200}
                height={200}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 text-center ">
          <div className="flex flex-col  align items-center gap-3 p-5">
            <div className="text-[#345995] font-bold text-lg">About Us</div>
            <div className="text-left">
              The Philippine Institute for Student Democracy (PISD) Inc. is a
              SEC-registered, non-stock, non-profit, and non-partisan research
              institute that promotes and protects students&apos; democratic
              rights and freedoms and advances student democracy.
            </div>
            <Button
              asChild
              variant="default"
              size="sm"
              className="bg-[#345995] text-white hover:bg-[#2a4777] text-md"
            >
              <Link href="about_us">Learn More </Link>
            </Button>
          </div>
          <div className="flex flex-col  align items-center gap-3 p-5">
            <div className="text-[#345995] font-bold text-lg">
              Let&apos;s Connect
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
