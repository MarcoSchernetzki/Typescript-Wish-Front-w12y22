import { configureStore } from '@reduxjs/toolkit';

export const appStore = configureStore({
    reducer: {},
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
