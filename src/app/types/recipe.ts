export interface IImage { 
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

export interface IRecipe {
  id: number;
  created_at: number;
  title: string;
  description: string;
  user_id: number;
  images: IImage[];
}

  