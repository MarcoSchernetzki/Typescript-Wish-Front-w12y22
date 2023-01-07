import { RepoWish } from './repository';
import { WishI } from './../model/wish';

export class WishRepository implements RepoWish {
    url: string;
    constructor(url = '') {
        this.url = 'http://localhost:7700/wishes';
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    async getWish(id: string): Promise<WishI> {
        return fetch(`${this.url}/${id}`)
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    async getAllWishes(): Promise<{ wishes: WishI[] }> {
        return fetch(`${this.url}`)
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    async findInspo(): Promise<WishI[]> {
        return fetch(`${this.url}/find/:inspiration/:true`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }

    async create(
        wish: Partial<WishI>,
        token: string
    ): Promise<{ wishes: WishI }> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(wish),
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }

    async update(
        id: string,
        partialWish: Partial<WishI>,
        token: string
    ): Promise<WishI> {
        return fetch(`${this.url}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialWish),
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => data.wish)
            .catch((error) => {
                return `${error}`;
            });
    }

    async delete(id: string, token: string): Promise<string> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => data.id)
            .catch((error) => {
                return `${error}`;
            });
    }
}
