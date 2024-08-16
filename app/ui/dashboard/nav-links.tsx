"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

const NavLinks = () => {
  const pathname = usePathname(); // gets pathname

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx( 
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;

/*
  To use the <Link /> component, open /app/ui/dashboard/nav-links.tsx, and import the Link component from next/link. 
  Then, replace the <a> tag with <Link>:

  usePathname() that you can use to check the path and implement this pattern.
  Since usePathname() is a hook, you'll need to turn nav-links.tsx into a Client Component. 
  Add React's "use client" directive to the top of the file, then import usePathname() from next/navigation:

  You can use the clsx library introduced in the chapter on CSS styling to conditionally apply class names when the link is active. 
  When link.href matches the pathname, the link should be displayed with blue text and a light blue background.
*/