import { UserI, UserToken } from './../model/user';

export interface RepoUser {
    getUser: (id: string) => Promise<UserI>;
    register: (user: Partial<UserI>) => Promise<UserI>;
    login: (user: Partial<UserI>) => Promise<UserToken>;
}
