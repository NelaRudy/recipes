import { z } from "zod";
import { CREATE_RECIPE_TITLE_REQUIRED_MSG, CREATE_RECIPE_DESCRIPTION_REQUIRED_MSG } from "../texts";

export interface Image { 
  access: string;
  path: string;
  name: string;
  type: string;
  size: number;
  mime: string; 
  meta: {
    width: number;
    height: number; 
  }; 
  url: string;
}

export interface RecipeUser {
  name: string;
  email: string;
}

export interface Recipe {
  id: number;
  created_at: number;
  title: string;
  description: string;
  user_id: number;
  images: Image[];
  _user: RecipeUser;
}

export const addRecipeSchema = z.object({
  title: z.string().trim().min(5, CREATE_RECIPE_TITLE_REQUIRED_MSG),
  description: z.string().trim().min(5, CREATE_RECIPE_DESCRIPTION_REQUIRED_MSG),
});

export type AddRecipe = z.infer<typeof addRecipeSchema>;
  