import { Icon_PHP_donate } from "@/components/svg_hold";
import { Button } from "@/components/ui/button";
import { IconBuildingBank } from "@tabler/icons-react";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <main className="flex flex-col min-h-screen   items-center  bg-white dark:bg-black sm:items-start">
      <div className="bg-[#345995] w-full text-white py-3 text-center text-2xl">
        Lorem Ipsum Dolor
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_40%] w-full gap-6 py-10 px-20">
        <div className="flex flex-col gap-8 ">
          <div className="text-7xl font-bold text-[#345995]">What We Do</div>
          <div className="flex flex-row gap-4 ">
            <Button className="bg-[#47A23F] font-bold  rounded-4xl text-white hover:bg-[#33752d] text-md py-5 ">
              Projects
            </Button>
            <Button className="rounded-4xl font-bold bg-[#9B2242] hover:bg-[#741a32] text-md p-5">
              Campaigns
            </Button>
          </div>
        </div>
        <div className="bg-blue-700 w-full justify-center">
          <Image
            src="/img/flag.jpg"
            alt="placeholder"
            objectFit="cover"
            width={200}
            height={200}
            loading="lazy"
            className="px-3 shrink-0"
          />
        </div>
      </div>
      {/*Wrapped Summary */}
      <div className="flex flex-col bg-[#345995] text-white w-full  py-10 px-10 gap-5">
        <div className="flex flex-col gap-2">
          <div className="font-black text-5xl">2025 Wrapped</div>
        </div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col gap-2 items-center border w-50">
            <IconBuildingBank size={100} />
            <div className="text-xl text-center font-bold">
              # Partnered Institutions
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center border w-50">
            <IconBuildingBank size={100} />
            <div className="text-xl text-center font-bold">
              # of Media Interviews
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center border w-50">
            <IconBuildingBank size={100} />
            <div className="text-xl text-center font-bold">
              # of Major Projects
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center border w-50 py-5">
            <Icon_PHP_donate width={80} height={80} />
            <div className="text-xl text-center font-bold">
              # Donors
            </div>
          </div>
        </div>
      </div>
      {/*Section 1  */}
      <div className=" flex-1 flex flex-col bg-[#47A23F] text-white w-full  py-10 px-10 gap-5"></div>
      {/*Section 2 */}
      <div className=" flex-1 flex flex-col bg-[#9B2242] text-white w-full  py-10 px-10 gap-5"></div>
    </main>
  );
}
