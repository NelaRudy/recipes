"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuItems, menuItemsKeys } from "./consts";
import { mergeClasses } from "@/app/utils/classNameUtils";

type MenuLinkProps = { menuItem: menuItemsKeys };

export const MenuLink = ({ menuItem }: MenuLinkProps) => {
    const currentPathname = usePathname();
    const cn = mergeClasses({ "border-b-2 border-gray-50": currentPathname === menuItems[menuItem].path });

    return (
        <Link className={cn} href={menuItems[menuItem].path}>{menuItems[menuItem].name}</Link>
    );
}

export default MenuLink;
