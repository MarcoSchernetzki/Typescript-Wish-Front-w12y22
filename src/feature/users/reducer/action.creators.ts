import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './action.types';
import { UserI } from '../model/user';
import { WishI } from '../../wishes/model/wish';

export const loginActionCreator = createAction<{ user: UserI; token: string }>(
    actionTypes.login
);
export const logoutActionCreator = createAction<void>(actionTypes.logout);
export const getActionCreator = createAction<UserI>(actionTypes.get);
export const addWishActionUser = createAction<WishI>(actionTypes.addWish);
export const updateWishActionUser = createAction<WishI>(actionTypes.updateWish);
export const deleteWishActionUser = createAction<WishI['id']>(
    actionTypes.deleteWish
);
