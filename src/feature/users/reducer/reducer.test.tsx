import { WishI } from '../../wishes/model/wish';
import { UserI } from '../model/user';
import { actionTypes } from './action.types';
import { userReducer } from './reducer';

describe('Given the function wishReducer', () => {
    const mockWish: WishI = {
        id: '1',
        category: null,
        inspiration: true,
        name: 'WishOne',
        image: 'imageOne',
        origin: 'originOne',
        price: 'priceOne',
        comments: 'commentsOne',
        comeTrue: false,
        owner: null,
    };

    const mock: UserI = {
        id: '1',
        name: 'Pepe',
        email: 'pepe@gmail.com',
        passwd: '123',
        role: 'user',
        myWishes: [mockWish],
    };

    let action: { type: string; payload: unknown };
    let state: {
        user: UserI;
        token: string | null;
        isLogged: boolean;
    };

    describe('When the action is login', () => {
        test('Then the returned state should include the action payload', () => {
            action = {
                type: actionTypes.login,
                payload: {
                    user: mock,
                    token: 'token',
                    isLogged: true,
                },
            };
            state = {
                user: mock,
                token: null,
                isLogged: false,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is logout', () => {
        test('Then the returned state should be the action payload', () => {
            action = {
                type: actionTypes.logout,
                payload: {
                    user: null,
                    token: null,
                    isLogged: false,
                },
            };
            state = {
                user: mock,
                token: 'token',
                isLogged: false,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is get', () => {
        test('Then the returned state should be the action payload', () => {
            action = {
                type: actionTypes.get,
                payload: mock,
            };
            state = {
                user: mock,
                token: 'token',
                isLogged: false,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is addWish', () => {
        test('Then the returned state should be the action payload', () => {
            action = {
                type: actionTypes.addWish,
                payload: mockWish,
            };
            state = {
                user: mock,
                token: 'token',
                isLogged: false,
            };
            const result = userReducer(state, action);
            expect(result).toEqual({
                ...state,
                user: {
                    ...state.user,
                    myWishes: [...state.user.myWishes, mockWish],
                },
            });
        });
    });

    describe('When the action is updateWish', () => {
        test('Then the returned state should be the action payload', () => {
            const mockWishTwo: WishI = {
                id: '1',
                category: null,
                inspiration: true,
                name: 'WishTwo',
                image: 'imageOne',
                origin: 'originOne',
                price: 'priceOne',
                comments: 'commentsOne',
                comeTrue: false,
                owner: null,
            };
            action = {
                type: actionTypes.updateWish,
                payload: mockWishTwo,
            };

            const mockUserTwo: UserI = {
                id: '1',
                name: 'Pepe',
                email: 'pepe@gmail.com',
                passwd: '123',
                role: 'user',
                myWishes: [mockWishTwo],
            };

            state = {
                user: mock,
                token: 'token',
                isLogged: false,
            };
            const newState = {
                user: mockUserTwo,
                token: 'token',
                isLogged: false,
            };

            const result = userReducer(state, action);
            expect(result).toEqual(newState);
        });
        test('Then the returned state should be the action payload', () => {
            const mockWishTwo = {
                id: '2',
                name: 'WishOne',
            };
            action = {
                type: actionTypes.updateWish,
                payload: mockWishTwo,
            };

            state = {
                user: mock,
                token: 'token',
                isLogged: false,
            };

            const result = userReducer(state, action);
            expect(result.user?.myWishes[0].name).toEqual('WishOne');
        });
    });

    describe('When the action is deleteWish', () => {
        test('Then the returned state should be the action payload', () => {
            action = {
                type: actionTypes.deleteWish,
                payload: mockWish.id,
            };
            state = {
                user: mock,
                token: 'token',
                isLogged: false,
            };
            const mockThree: UserI = {
                id: '1',
                name: 'Pepe',
                email: 'pepe@gmail.com',
                passwd: '123',
                role: 'user',
                myWishes: [],
            };
            const finalState = {
                user: mockThree,
                token: 'token',
                isLogged: false,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(finalState);
        });
    });
});
