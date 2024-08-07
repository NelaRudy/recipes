import { menuItems } from "./consts";
import MenuLink, { MenuLinkProps } from "./MenuLink";

export const Menu = () => {
    const liCn = "mr-8";
    const menuValues: MenuLinkProps[] = Object.values(menuItems);
    return (
        <nav className="container mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 text-lg">
            <ul className="flex">
                {menuValues.map((item) => 
                    <li key={"menu-item-" + item.path} className={liCn}>
                        <MenuLink path={item.path} name={item.name} />
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Menu;
