import { WishI } from '../../wishes/model/wish';

export type Role = 'user' | 'admin';

export type UserI = {
    id: string;
    name: string;
    email: string;
    passwd: string;
    role: Role;
    myWishes: WishI[];
};

export type ProtoUserI = {
    name: string;
    email: string;
    passwd: string;
    role: Role;
    myWishes: WishI[];
};

export type UserToken = {
    user: UserI;
    token: string;
};
