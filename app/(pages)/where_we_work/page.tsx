import { lorem } from "@/components/project_description";
import { Button } from "@/components/ui/button";
import { IconMap2 } from "@tabler/icons-react";
import Image from "next/image";

export default function WhereWeWork() {
  return (
    <main className="flex flex-col min-h-screen   items-center  bg-white dark:bg-black sm:items-start">
      <div className="bg-[#345995] w-full text-white py-3 text-center text-2xl">
        Lorem Ipsum Dolor
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_40%] w-full gap-6 py-10 px-20">
        <div className="flex flex-col gap-8 ">
          <div className="text-7xl font-bold text-[#345995]">Where We Work</div>
          <div className="flex flex-row gap-4 ">
            <Button className="rounded-4xl font-bold bg-[#345995] hover:bg-[#264270] text-md p-5">
              Location
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
        <div className="font-black text-5xl">Location</div>

        <div className="flex flex-row items-center gap-10 px-15">
          <IconMap2 size={200} />
          <div className="max-w-md">{lorem}</div>
        </div>
      </div>
    </main>
  );
}
