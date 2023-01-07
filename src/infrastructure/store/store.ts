import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../feature/users/reducer/reducer';
import { wishReducer } from '../../feature/wishes/reducer/reducer';

export const appStore = configureStore({
    reducer: {
        wishes: wishReducer,
        users: userReducer,
    },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
