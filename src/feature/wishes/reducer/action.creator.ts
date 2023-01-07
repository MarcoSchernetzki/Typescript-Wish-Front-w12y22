import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './action.types';
import { WishI } from '../model/wish';

export const loadActionCreator = createAction<WishI[]>(actionTypes.load);
export const addActionCreator = createAction<WishI>(actionTypes.add);
export const updateActionCreator = createAction<WishI>(actionTypes.update);
export const deleteActionCreator = createAction<WishI['id']>(
    actionTypes.delete
);
export const selectActionCreator = createAction<WishI>(actionTypes.select);
export const comeTrueActionCreator = createAction<boolean>(
    actionTypes.comeTrue
);
