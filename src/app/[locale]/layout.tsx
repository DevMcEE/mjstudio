import { Link } from "@/i18n/routing";
import { MenuItem, Route } from "../api/route.types";

export default async function PageLayout({
  children, // will be a page or nested layout
  params, // will be a promise
}: {
  children: React.ReactNode,
  params: Promise<{locale: string}>
}) {
  const { locale } = await params;
  let menu: MenuItem[] = [];
  try {
   menu = await fetch(`${process.env.API_URL}/${Route.homePageMenu}`,{
      cache: 'no-cache',
      headers: {  'Accept-Language': locale }
    }).then((res) => res.json())
  } catch (error) {
    console.error('Failed to fetch metadata:', error);
  }

  console.log({menu, locale});
  return (
    <section>
    <nav>
      <ul> 
        {
          menu.map(({ title, url, hash } ) => (
            <li key={`${url}${hash}`}>
              {/* @ts-expect-error - type / */}
              <Link href={`${url}${hash}`}>{title}</Link>
            </li>
          ))
        }
      </ul>
    </nav>

    {children}
  </section>
  );
}