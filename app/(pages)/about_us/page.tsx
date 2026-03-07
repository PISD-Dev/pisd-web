import { lorem } from "@/components/project_description";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import OrgChartWidget from "../../../components/orgchart_widget";

export default function AboutUs() {
  return (
    <main className="flex flex-col min-h-screen   items-center  bg-white dark:bg-black sm:items-start">
      <div className="bg-[#345995] w-full text-white py-3 text-center text-2xl">
        Lorem Ipsum Dolor
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_40%] w-full gap-6 py-10 px-20">
        <div className="flex flex-col gap-8 ">
          <div className="text-7xl font-bold text-[#345995]">About Us</div>
          <div className="flex flex-row gap-4 ">
            <Button className="rounded-4xl font-bold bg-[#9B2242] hover:bg-[#741a32] text-md p-5">
              Vision-Mission
            </Button>
            <Button className="rounded-4xl font-bold bg-[#F2CD00] text-black hover:bg-[#caac01] text-md p-5">
              Organizational Chart
            </Button>
            <Button className="bg-[#47A23F] font-bold  rounded-4xl text-white hover:bg-[#33752d] text-md py-5 ">
              History
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
      {/*Vision Mission*/}
      <div className="bg-[#9B2242] text-white w-full grid grid-cols-3 py-12 px-10 gap-5">
        <div className="flex flex-col gap-2">
          <div className="font-black text-4xl">Vision</div>
          <div>{lorem}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-black text-4xl">Mission</div>
          <div>{lorem}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-black text-4xl">Mandate</div>
          <div>{lorem}</div>
        </div>
      </div>

      {/*Org Chart*/}
      <div className="flex flex-col bg-[#F2CD00] text-white w-full  py-10 px-10 gap-5">
        <div className="font-black text-4xl">Organization Chart</div>
        <div className="flex flex-col gap-6">
          <div className="flex  justify-around">
            <OrgChartWidget
              name="Juan Dela Cruz"
              position="Standing Up"
              img_link=""
            />
            <OrgChartWidget
              name="Juan Dela Cruz"
              position="Standing Up"
              img_link=""
            />
            <OrgChartWidget
              name="Juan Dela Cruz"
              position="Standing Up"
              img_link=""
            />
          </div>
          <div className="flex justify-around">
            <OrgChartWidget
              name="Juan Dela Cruz"
              position="Standing Up"
              img_link=""
            />
            <OrgChartWidget
              name="Juan Dela Cruz"
              position="Standing Up"
              img_link=""
            />
          </div>
        </div>
      </div>

      {/*Vision Mission*/}
      <div className="bg-[#47A23F] text-white w-full grid grid-cols-[minmax(0,1fr)_70%]  py-10 px-10 gap-20">
        <div className="flex flex-col gap-2">
          <div className="font-black text-4xl">History</div>
          <div>{lorem}</div>
        </div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col gap-2 items-center  border w-50">
            <Image
              src="/img/flag.jpg"
              alt="flag"
              width={200}
              height={125}
              className="aspect-square object-cover border"
            />
            <div className="text-center  line-clamp-5">{lorem}</div>
          </div>
          <div className="flex flex-col gap-2 items-center  border w-50">
            <Image
              src="/img/flag.jpg"
              alt="flag"
              width={200}
              height={125}
              className="aspect-square object-cover border"
            />
            <div className="text-center  line-clamp-5">{lorem}</div>
          </div>
          <div className="flex flex-col gap-2 items-center  border w-50">
            <Image
              src="/img/flag.jpg"
              alt="flag"
              width={200}
              height={125}
              className="aspect-square object-cover border"
            />
            <div className="text-center  line-clamp-5">{lorem}</div>
          </div>
          <div className="flex flex-col gap-2 items-center  border w-50">
            <Image
              src="/img/flag.jpg"
              alt="flag"
              width={200}
              height={125}
              className="aspect-square object-cover border"
            />
            <div className="text-center  line-clamp-5">{lorem}</div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
