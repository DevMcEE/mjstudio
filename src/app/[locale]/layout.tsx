import { MenuItem, Route } from "../api/route.types";
import { TopBar } from "../components/TopBar/TopBar";

export default async function PageLayout({
  children, // will be a page or nested layout
  params, // will be a promise
}: {
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}) {
  let menu: MenuItem[] = [];
  const { locale } = await params;

  try {
    menu = await fetch(`${process.env.API_URL}/${Route.homePageMenu}`, {
      cache: 'no-cache',
      headers: { 'Accept-Language': locale }
    }).then((res) => res.json())
  } catch (error) {
    console.error('Failed to fetch metadata:', error);
  }

  return (
    <div className="main-container">
      <TopBar menu={menu} />
      {children}
    </div>
  );
}