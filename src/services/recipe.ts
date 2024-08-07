import { Recipe } from "../lib/types/recipe";
import { RECIPE_ENDPOINT } from "./consts";

export const getRecipes = async () => {
    const res = await fetch(`${process.env.XANO_BASE_URL}${RECIPE_ENDPOINT}`);
    const items = await res.json();

    // status
    // obsluga 
    // try catch { // TODO sent to login system (sentry)}

    return items ?? [] as Recipe[];
  };


  // folder "api"
  // https://nextjs.org/docs/pages/building-your-application/routing/api-routes
  // web hooki endpointy - zwraca json, text
  //