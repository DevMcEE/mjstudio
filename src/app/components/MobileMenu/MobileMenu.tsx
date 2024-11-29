'use client';
import { MenuItem } from "@/app/api/route.types";
import { useState } from "react";
import { MenuModal } from "../MenuModal";
import { MenuIcon } from "../icons";
import { IconButton } from "../IconButton";
import styles from './MobileMenu.module.css';
interface MobileMenuProps {
  menu: MenuItem[];
  currentLocale: string;
};

export const MobileMenu = ({menu, currentLocale}: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      {!isOpen && (
        <IconButton icon={<MenuIcon />} onClick={()=>setIsOpen(true)} />
      )}
      {isOpen && <MenuModal menu={menu} currentLocale={currentLocale} onClose={()=>setIsOpen(false)}/>}
    </div>
  );
}