import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

/*
  If you look inside the /app/ui folder, you'll see a file called global.css. 
  Add CSS rules to all the routes in your application - such as CSS reset rules, site-wide styles for HTML elements like links, and more.

  You can import global.css in any component in your application, but it's usually good practice to add it to your top-level component. 
  In Next.js, this is the root layout (more on this later).
*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}


/*
  By adding Inter to the <body> element, the font will be applied throughout your application. 
  Here, you're also adding the Tailwind antialiased class which smooths out the font.
*/