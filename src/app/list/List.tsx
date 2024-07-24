import { IRecipe } from "../types/recipe";
import ListItem from "./ListItem";

type ListProps = {
    recipes: IRecipe[];
};

const List = ({ recipes }: ListProps) => {
    return (
        <>
            {recipes.map((recipe, index) => 
                <ListItem key={"recipe-" + recipe.id} recipe={recipe} />
            )}
        </>
    );
};

export default List;
