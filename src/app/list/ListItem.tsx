"use client"

import { Recipe } from "../../lib/types/recipe";
import Image from "next/image";
import { format } from "date-fns";
import { Suspense } from "react";
import { recipeImageSrc } from "@/lib/consts";
import FallbackImage from "./FallbackImage";
import { redirect, useRouter } from "next/navigation";
import { RECIPE_ENDPOINT } from "@/services/consts";

type ListItemProps = {
    recipe: Recipe;
};

const ListItem = ({ recipe }: ListItemProps) => {
    const imageSrc = recipe.images[0]?.url ?? recipeImageSrc;
    const { push } = useRouter();

    const onRecipeClick = () => {
        console.log(`${RECIPE_ENDPOINT}/${recipe.id}`);
        push(`/${RECIPE_ENDPOINT}/${recipe.id}`);
    }

    return (
        <div
            className="max-w-sm overflow-hidden shadow-lg border border-teal-600 bg-white rounded flex flex-col justify-between leading-normal"
            onClick={onRecipeClick}    
        >
            <Suspense fallback={<FallbackImage />}>
                <Image src={imageSrc} className="w-full mb-3 p-2 max-h-48 object-cover" width={350} height={240} alt="photo of the dish"/>
            </Suspense>
            <div className="p-4 pt-2">
                <div className="mb-8">
                    <a href="#" className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block truncate">{recipe.title}</a>
                    <p className="text-gray-700 text-sm truncate-multi-line">{recipe.description}</p>
                </div>
                <div className="flex items-center">
                    <a
                        href="#"><Image className="w-10 h-10 rounded-full mr-4" src="/assets/avatar.svg" width={40} height={40} alt="Avatar of Jonathan Reinink" /></a>
                    <div className="text-sm">
                        <a href="#" className="text-gray-900 font-semibold leading-none hover:text-indigo-600">{recipe._user.name}</a>
                        <p className="text-gray-600">{format(recipe.created_at, "yyyy-MM-dd")}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ListItem;
