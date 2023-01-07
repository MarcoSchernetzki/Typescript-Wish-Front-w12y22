import { UserI, UserToken } from './../model/user';
import { RepoUser } from './repository';

export class UserRepository implements RepoUser {
    url: string;
    constructor(url = '') {
        this.url = 'http://localhost:7700/users';
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    async getUser(id: string): Promise<UserI> {
        return fetch(`${this.url}/${id}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }

    // PUEDE IR EN REGISTER FORM
    register(user: Partial<UserI>): Promise<UserI> {
        return fetch(`${this.url}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }

    async login(user: Partial<UserI>): Promise<UserToken> {
        return fetch(`${this.url}/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
}
