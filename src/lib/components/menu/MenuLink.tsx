"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuItems, menuItemsKeys } from "./consts";
import { mergeClasses } from "@/lib/utils/classNameUtils";

export type MenuLinkProps = { path: string, name: string };

export const MenuLink = ({ path, name }: MenuLinkProps) => {
    const currentPathname = usePathname();
    const cn = mergeClasses({ "border-b-2 border-gray-50": currentPathname === path });

    return (
        <Link className={cn} href={path}>{name}</Link>
    );
}

export default MenuLink;
