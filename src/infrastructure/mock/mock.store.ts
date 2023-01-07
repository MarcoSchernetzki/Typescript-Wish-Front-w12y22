import { WishI } from './../features/wishes/model/wish';
import { configureStore } from '@reduxjs/toolkit';
import { Role } from '../features/users/model/user';
import { userReducer } from '../features/users/reducer/reducer';
import { wishReducer } from '../features/wishes/reducer/reducer';
import { rootState } from '../infrastructure/store/store';

export const userMock = {
    id: '1',
    name: 'Pepe',
    email: 'pepe@gmail.com',
    passwd: 'Pepe123',
    role: 'user' as Role,
    myWishes: [],
};

export const userMockToken = {
    id: '1',
    name: 'Pepe',
    email: 'pepe@gmail.com',
    passwd: 'Pepe123',
    role: 'user' as Role,
    myWishes: [],
    token: 'hola',
};

export const preloadedState: Partial<rootState> = {
    users: {
        user: userMock,
        token: 'token',
        isLogged: true,
    },
    wishes: { wishes: [{ name: 'deseo' } as WishI], selectedWish: {} as WishI },
};

export const mockStore = configureStore({
    reducer: {
        users: userReducer,
        wishes: wishReducer,
    },
    preloadedState,
});
