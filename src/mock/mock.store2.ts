import { configureStore } from '@reduxjs/toolkit';
import { UserI } from '../feature/users/model/user';
import { userReducer } from '../feature/users/reducer/reducer';
import { WishI } from '../feature/wishes/model/wish';
import { wishReducer } from '../feature/wishes/reducer/reducer';
import { rootState } from '../infrastructure/store/store';

export const wishMock = {
    name: 'Pulsera',
    image: '',
    origin: 'El Corte Inglés',
    price: '500',
    inspiration: true,
    comments: 'Pulsera plateada',
} as WishI;

export const userMock = {
    id: '1',
    name: 'Carlos',
    email: 'carlos@gmail.com',
    passwd: 'Carlos123',
    role: 'user',
    myWishes: [wishMock],
} as UserI;

export const preloadedState: Partial<rootState> = {
    users: {
        user: userMock,
        token: '',
        isLogged: true,
    },
    wishes: {
        wishes: [wishMock],
        selectedWish: wishMock,
    },
};

export const mockStore2 = configureStore({
    reducer: {
        users: userReducer,
        wishes: wishReducer,
    },
    preloadedState,
});
