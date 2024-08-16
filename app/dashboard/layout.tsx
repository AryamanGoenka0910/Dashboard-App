import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

/* 
    LAYOUT

    Dashboards have some sort of navigation that is shared across multiple pages. 
    In Next.js, you can use a special layout.tsx file to create UI that is shared between multiple pages. 
    Let's create a layout for the dashboard pages!

    Inside the /dashboard folder, add a new file called layout.tsx

    Importing the <SideNav /> component into your layout. 
    Any components you import into this file will be part of the layout.
    They will affect any documents futher down the tree

    The <Layout /> component receives a children prop. 
    This child can either be a page or another layout. 
    In your case, the pages inside /dashboard will automatically be nested inside a <Layout /> like here

    Since the new layout you've just created (/app/dashboard/layout.tsx) is unique to the dashboard pages, 
    you don't need to add any UI to the root layout above.
*/

/*
    NAVIGATION

    At the moment, the sidebar links use <a> elements, 
    but notice what happens when you navigate between the home, invoices, and customers pages on your browser.

    There's a full page refresh on each page navigation!


    Although parts of your application are rendered on the server, 
    there's no full page refresh, making it feel like a web app. Why is that?
*/