import { WishI } from '../model/wish';

export interface RepoWish {
    getWish: (id: string) => Promise<WishI>;
    findInspo: () => Promise<WishI[]>;
    create: (wish: Partial<WishI>, token: string) => Promise<{ wishes: WishI }>;
    update: (
        id: string,
        partialWish: Partial<WishI>,
        token: string
    ) => Promise<WishI>;
    delete: (id: string, token: string) => Promise<string>;
}
