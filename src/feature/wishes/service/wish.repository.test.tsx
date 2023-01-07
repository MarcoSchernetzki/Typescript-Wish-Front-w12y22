import { UserI } from '../../users/model/user';
import { WishI } from '../model/wish';
import { WishRepository } from './wish.repository';

const mockUser: UserI = {
    id: '',
    name: 'Pepe',
    email: 'pepe@gmail.com',
    passwd: '123',
    role: 'user',
    myWishes: [],
};

const mockWish: WishI = {
    id: '15',
    category: null,
    inspiration: true,
    name: 'Wish',
    image: 'image',
    origin: 'origin',
    price: 'price',
    comments: 'comments',
    comeTrue: false,
    owner: mockUser,
};

const newMockWish: WishI = {
    id: '15',
    category: null,
    inspiration: true,
    name: 'WishTwo',
    image: 'image',
    origin: 'origin',
    price: 'price',
    comments: 'comments',
    comeTrue: false,
    owner: mockUser,
};

describe('Given userRepository Service', () => {
    let service: WishRepository;
    const error = new Error('Error');
    beforeEach(() => {
        service = new WishRepository();
    });

    describe('When it has been run getWish and it has called getWish', () => {
        test(`Then if I use service.getWish() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockWish),
            });
            const result = await service.getWish(mockWish.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(mockWish);
        });

        test(`Then if I use service.getWish() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.getWish(mockWish.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When it has been run getWish and it has called getAllWishes', () => {
        test(`Then if I use service.getAllWishes() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockWish),
            });
            const result = await service.getAllWishes();
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(mockWish);
        });

        test(`Then if I use service.getAllWishes() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.getAllWishes();
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When it has been run findInspo and it has called findAll', () => {
        test(`Then if I use service.findInspo() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockWish),
            });
            const result = await service.findInspo();
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(mockWish);
        });
        test(`Then if I use service.findInspo() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.findInspo();
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When it has been run create and it has called create', () => {
        test(`Then if I use create() it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockWish),
            });
            const result = await service.create(mockWish, 'token');
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(mockWish);
        });
        test(`Then if I use service.createProduct() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.create(mockWish, 'token');
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When it has been run update and it has called update', () => {
        test(`Then if I use service.update() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(newMockWish),
            });
            const result = await service.update(
                mockWish.id,
                {
                    name: newMockWish.name,
                },
                'token'
            );
            expect(fetch).toHaveBeenCalled();
            expect(result).not.toBe(newMockWish);
        });
        test(`Then if I use service.updateProduct() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.update(
                mockWish.id,
                {
                    price: '55',
                },
                'token'
            );
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When it has been run delete and it has called delete', () => {
        test(`Then if I use service.deleteProduct() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockWish),
            });
            const result = await service.delete(mockWish.id, 'token');
            expect(fetch).toHaveBeenCalled();
            expect(result).not.toBe(mockWish);
        });

        test(`Then if I use service.deleteProduct() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.delete(mockWish.id, 'token');
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('When we instantiate it', () => {
        test('Then if i use service.createError(), it should return an error', () => {
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );

            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(error).toEqual(result);
        });
    });
});
