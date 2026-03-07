import { IconUser } from "@tabler/icons-react";

export default function OrgChartWidget({
  name,
  position,
  img_link,
}: {
  name: string;
  position: string;
  img_link: string;
}) {
  return (
    <div className="flex flex-row gap-5  items-center ">
      <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center shadow">
        <IconUser size={40} className="text-[#F2CD00]" />
      </div>
      <div className=" content-center flex flex-col py-2">
        <div className="font-bold text-xl">{name}</div>
        <div className="italic text-lg">{position}</div>
      </div>
    </div>
  );
}
