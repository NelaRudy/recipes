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

  