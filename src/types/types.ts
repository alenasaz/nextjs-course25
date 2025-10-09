export type RacketType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: string;
  model: string;
  year: number;
  top10: boolean;
  description: string;
  brandId: number;
  brand: {
    id: number;
    name: string;
  };
  userData?: {
    isFavorite?: boolean;
  };
};

export type Response<Entity> = {
  isError: boolean;
  data?: Entity;
};

export interface IUser {
  name: string;
}

export interface LoginState {
  error?: string;
  redirectTo?: string;
}
