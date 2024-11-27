'use client';
import { MenuItem } from "@/app/api/route.types";
import { useState } from "react";
import { MenuModal } from "../MenuModal";
import { MenuIcon } from "../icons";
import { IconButton } from "../IconButton";

interface MobileMenuProps {
  menu: MenuItem[];
};

export const MobileMenu = ({menu}: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {!isOpen && (
        <IconButton icon={<MenuIcon />} onClick={()=>setIsOpen(true)} />
      )}
      {isOpen && <MenuModal menu={menu} onClose={()=>setIsOpen(false)}/>}
    </div>
  );
}