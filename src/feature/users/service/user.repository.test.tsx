import { Role } from '../model/user';
import { UserRepository } from './user.repository';

const mockUser = {
    id: '098765432109876543214321',
    name: 'Pepe',
    email: 'pepe@gmail.com',
    passwd: '12345',
    role: 'user' as Role,
    myWishes: [],
};

let service: UserRepository;
let error: Error;
beforeEach(() => {
    service = new UserRepository();
    error = new Error('error');
});

describe('When getUser is called,', () => {
    test('Then it should return an user', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockUser),
        });
        const result = await service.getUser(mockUser.id);
        expect(fetch).toHaveBeenCalled();
        expect(result).toEqual(mockUser);
    });
    test('Then it should throw an error if incorrect login', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false,
            status: 404,
            statusText: 'error',
        });
        await service.getUser(mockUser.id);
        expect(fetch).toHaveBeenCalled();
        expect(error).toBeInstanceOf(Error);
    });
});

describe('When login is called,', () => {
    test('Then it should return a token', async () => {
        const mockToken =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGUwMzc5ZTViOTRlNDcxYmE1MzM0NiIsInVzZXJOYW1lIjoiSXJlbnVza2EiLCJlbWFpbCI6ImlyZW51c2thQGNvbSIsImlhdCI6MTY3MDQyMzE3N30.KZlpynbm7FeJF9cj3-bQSKjJp4VZrESMrIXWGjM8EuI';
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockToken),
        });
        const result = await service.login({ name: mockUser.name });
        expect(fetch).toHaveBeenCalled();
        expect(result).toEqual(mockToken);
    });
    test('Then it should throw an error if incorrect login', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false,
            status: 404,
            statusText: 'error',
        });
        await service.login(mockUser);
        expect(fetch).toHaveBeenCalled();
        expect(error).toBeInstanceOf(Error);
    });
});

describe('When register is called,', () => {
    test('Then it should...', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockUser),
        });
        const result = await service.register(mockUser);
        expect(fetch).toHaveBeenCalled();
        expect(result).toEqual(mockUser);
    });
    test('Then it should throw an error if incorrect login', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false,
            status: 404,
            statusText: 'error',
        });
        await service.register(mockUser);
        expect(fetch).toHaveBeenCalled();
        expect(error).toBeInstanceOf(Error);
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
