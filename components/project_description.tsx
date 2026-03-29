import Image from "next/image";
export default function ProjectDescriptionWidget({
  alt_text,
  imageLink,
  description,
}: {
  alt_text: string;
  imageLink: string;
  description: string;
}) {
  return (

    <div className="flex flex-col ">
      <div className="relative  h-90 ">
        <Image
          src={imageLink}
          alt={alt_text}
          fill
          className="object-cover "
          loading="lazy"
        />

  
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 via-50% to-transparent px-3" />

        <div className="absolute bottom-3 left-3 right-3 text-white text-sm">
          {description}
        </div>
      </div>

    </div>
  );
}

export const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur.
`;
