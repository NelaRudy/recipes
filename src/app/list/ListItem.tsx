import { IRecipe } from "../types/recipe";
import Image from "next/image";
import { format } from "date-fns";

type ListItemProps = {
    recipe: IRecipe;
};

const ListItem = ({ recipe }: ListItemProps) => {
    const imageSrc = "/assets/food/food1.png";
    return (
        <div
            className="border border-gray-400 bg-white rounded flex flex-col justify-between leading-normal">
            <Image src={imageSrc} className="w-full mb-3 p-2" width={350} height={240} alt="photo of the dish"/>
            <div className="p-4 pt-2">
                <div className="mb-8">
                    <a href="#" className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">{recipe.title}</a>
                    <p className="text-gray-700 text-sm">{recipe.description}</p>
                </div>
                <div className="flex items-center">
                    <a
                        href="#"><Image className="w-10 h-10 rounded-full mr-4" src="/assets/avatar.svg" width={40} height={40} alt="Avatar of Jonathan Reinink" /></a>
                    <div className="text-sm">
                        <a href="#" className="text-gray-900 font-semibold leading-none hover:text-indigo-600">{recipe.user_id}</a>
                        <p className="text-gray-600">{format(recipe.created_at, "yyyy-MM-dd")}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ListItem;
