import { MenuItem, Route, SocialLinks } from "../api/route.types";
import { Footer } from "../components/Footer";
import { TopBar } from "../components/TopBar/TopBar";

export default async function PageLayout({
  children, // will be a page or nested layout
  params, // will be a promise
}: {
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}) {
  let menu: MenuItem[] = [];
  let socialLinks: SocialLinks = {};
  const { locale } = await params;

  try {
    const response = await fetch(`${process.env.API_URL}/${Route.homePageMenu}`, {
      cache: 'no-cache',
      headers: { 'Accept-Language': locale }
    }).then((res) => res.json());
    menu = response.menu; 
    socialLinks = response.socialLinks;
  } catch (error) {
    console.error('Failed to fetch metadata:', error);
  }

  return (
    <div className="main-container">
      <TopBar menu={menu} socialLinks={socialLinks} />
      {children}
      <Footer />
    </div>
  );
}