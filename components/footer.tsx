import { IconBrandFacebook, IconBrandFacebookFilled, IconMail, IconMailFilled, IconWorld } from '@tabler/icons-react';

import PISD_Logo from './svg_hold';
export default function Footer() {
  return (
    <footer className="grid grid-cols-2 gap-6 p-5 px-10 ">
      <div className=' my-auto'>
          <PISD_Logo width={300} className="text-[#345995] dark:text-white" />
      </div>
      <div className="grid grid-cols-2 gap-2 p-5 text-[#345995] dark:text-white justify-center">
        <a
          href="https://www.facebook.com/pisdofficial" className="flex items-center gap-2 group" target="_blank" rel="noopener noreferrer">
          <IconBrandFacebook className="group-hover:hidden" />
          
          <IconBrandFacebookFilled
            stroke={1.75}
            className="hidden text-blue-400 group-hover:inline group-hover:scale-125 transition-transform"
          />
          
          <span>Facebook</span>
        </a>
        <a className="flex items-center gap-2 group" href="mailto:info@pisd.org.ph"
            target="_blank" rel="noopener noreferrer">
              <IconMailFilled className="group-hover:hidden"/>
              <IconMail stroke={1.75} className="hidden text-blue-400 group-hover:inline group-hover:scale-125 transition-transform"/>
              <div>info@pisd.org.ph</div>
        </a>
        <a className="flex items-center gap-2 group" href="https://pisd.org.ph"
            target="_blank" rel="noopener noreferrer">
              <IconWorld className="group-hover:hidden"/>
              <IconWorld stroke={1.75} className="hidden text-blue-400 group-hover:inline group-hover:scale-125 transition-transform"/>
              <div>pisd.org.ph</div>
        </a>
      </div>
    </footer>

  );
}


