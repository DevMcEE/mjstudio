import { SocialLinks } from "@/app/api/route.types";
import { InstagramIcon, FacebookIcon } from "../icons";
import Link from "next/link";

interface SocialIconLinksProps {
  socialLinks?: SocialLinks;
}

export const SocialIconLinks = ({ socialLinks }: SocialIconLinksProps) => {
  if (!socialLinks) return null;

  return Object.entries(socialLinks).map(([socialNetwork, link]) => (
    <Link key={socialNetwork} href={link}> 
     {socialNetwork === 'instagram' ? <InstagramIcon /> : <FacebookIcon />}
    </Link>
  ))

 }