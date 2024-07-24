import { IRecipe } from "../types/recipe";
import { BASE_URL, RECIPE_ENDPOINT } from "./consts";

export const getRecipes = async () => {
    const res = await fetch(BASE_URL + RECIPE_ENDPOINT);
    const items = await res.json();

    return items ?? [] as IRecipe[];
  };