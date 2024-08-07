import { getRecipes } from "@/services/recipe";
import { Recipe } from "../../lib/types/recipe";
import ListItem from "./ListItem";

type ListProps = {
    searchParams?: string[];
};

export default async function List ({ searchParams }: ListProps) {
    const recipes = await getRecipes();

    return (
        <>
            {recipes.map((recipe: Recipe) => 
                <ListItem key={"recipe-" + recipe.id} recipe={recipe} />
            )}
        </>
    );
};
