import { Footer } from './components/Footer';
import { TopBar } from './components/TopBar';
import { MenuItem, Route, SocialLinks } from './api/route.types';

export default async function NotFound() {
  let menu: MenuItem[] = [];
  let socialLinks: SocialLinks = {};

  try {
    const response = await fetch(`${process.env.API_URL}/${Route.homePageMenu}`, {
      cache: 'no-cache',
    }).then((res) => res.json());

    menu = response.menu;
    socialLinks = response.socialLinks;
  } catch (error) {
    console.error('Failed to fetch metadata:', error);
  }
  
  return (
    <main className="main-container">
      <TopBar menu={menu} socialLinks={socialLinks} />
      <div className="not-foun-page-container">
        <h1>404 - Page Not Found</h1>

      </div>
      <Footer />
    </main>
  );
}