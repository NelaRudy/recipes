import { getRecipes } from "../api/recipe";
import List from "./List";

export default async function ListPage () {
    const recipes = await getRecipes();

    return (
        <>
            <div>Search component ...</div>
            <div>
                <h1 className="text-lg">Recipes:</h1>
                <div className="max-w-screen-xl mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                        <List recipes={recipes} />
                    </div>
                </div>
            </div>
        </>
    );
};
