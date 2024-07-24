import { menuItems } from "./consts";
import MenuLink from "./MenuLink";

export const Menu = () => {
    const liCn = "mr-8";
    return (
        <nav className="container mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 text-lg">
            <ul className="flex">
                <li className={liCn}>
                    <MenuLink menuItem="home" />
                </li>
                <li className={liCn}>
                    <MenuLink menuItem="list" />
                </li>
                <li className={liCn}>
                    <MenuLink menuItem="addRecipe" />
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
