
import Image from 'next/image';
import { Separator } from './ui/separator';
export default function ProjectDescriptionWidget({alt_text, imageLink, description}: { alt_text: string; imageLink: string,description:string}){
    return(
        <div className="flex flex-col p-5 w-80">
            <Image
            src={imageLink} alt={alt_text} 
            objectFit="cover" 
            width={350}
            height={350}
            loading="lazy" className='px-3 '/>
            <Separator className='my-4'/>
            <div className='line-clamp-4'>
                {description}
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