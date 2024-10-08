import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import styles from '@/app/ui/home.module.css'; // not necessary
import { lusitana } from './ui/fonts';
import Image from 'next/image';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="{flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52}">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
          />
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />

          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}


/*
  CSS Modules allow you to scope CSS to a component by automatically creating unique class names, 
  so you don't have to worry about style collisions as well.  
*/

/* 
  There may be cases where you may need to conditionally style an element based on state or some other condition.

  clsx is a library that lets you toggle class names easily. We recommend taking a look at documentation for more details, but here's the basic usage:

  Suppose that you want to create an InvoiceStatus component which accepts status. The status can be 'pending' or 'paid'.
  If it's 'paid', you want the color to be green. If it's 'pending', you want the color to be gray.

  Check invoices status to see
*/

/*
  FONTS (layout.tsx, fonts.ts)

  Cumulative Layout Shift is a metric used by Google to evaluate the performance and user experience of a website. 
  With fonts, layout shift happens when the browser initially renders text in a fallback or system font and then swaps it out for a custom font once it has loaded. 
  This swap can cause the text size, spacing, or layout to change, shifting elements around it.
*/


/*
  IMAGES

  Instead of manually implementing these optimizations, you can use the next/image component to automatically optimize your images.

  Image 1:
  Here, you're setting the width to 1000 and height to 760 pixels. 
  It's good practice to set the width and height of your images to avoid layout shift, these should be an aspect ratio identical to the source image.
  You'll also notice the class hidden to remove the image from the DOM on mobile screens, and md:block to show the image on desktop screens.

*/