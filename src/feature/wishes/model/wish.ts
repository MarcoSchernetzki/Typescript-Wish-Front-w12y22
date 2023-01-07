import { UserI } from '../../users/model/user';

export type Category = 'experiences' | 'christmas' | 'valentinesDay' | null;

export type WishI = {
    id: string;
    category: Category;
    inspiration: boolean;
    name: string;
    image: string;
    origin: string;
    price: string;
    comments: string;
    comeTrue: boolean;
    owner: UserI | null;
};

export type ProtoWishI = {
    category?: Category;
    inspiration?: boolean;
    name?: string;
    image?: string;
    origin?: string;
    price?: string;
    comments?: string;
    comeTrue?: boolean;
    owner?: UserI | null;
};
