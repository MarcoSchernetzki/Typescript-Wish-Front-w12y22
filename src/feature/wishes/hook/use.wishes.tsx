import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { rootState } from '../../../infrastructure/store/store';
import { WishRepository } from '../service/wish.repository';
import * as ac from '../reducer/action.creator';
import { WishI } from '../model/wish';
import {
    addWishActionUser,
    updateWishActionUser,
    deleteWishActionUser,
} from '../../users/reducer/action.creators';
import { useNavigate } from 'react-router-dom';

export const useWishes = () => {
    const navigate = useNavigate();
    const wishes = useSelector((state: rootState) => state.wishes);
    const dispatcher = useDispatch();
    const apiWish = useMemo(() => new WishRepository(), []);

    const handleLoad = useCallback(
        () =>
            apiWish
                .getAllWishes()
                .then((wishes) =>
                    dispatcher(ac.loadActionCreator(wishes.wishes))
                )
                .catch((error: Error) =>
                    console.log(error.name, error.message)
                ),
        [apiWish, dispatcher]
    );

    const handleAdd = (newWish: WishI, token: string) => {
        apiWish
            .create(newWish, token)
            .then((wish) => {
                dispatcher(ac.addActionCreator(wish.wishes));
                dispatcher(addWishActionUser(wish.wishes));
                navigate('/home');
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (
        id: string,
        updateWish: Partial<WishI>,
        token: string
    ) => {
        apiWish
            .update(id, updateWish, token)
            .then((wish: WishI) => {
                dispatcher(ac.updateActionCreator(wish));
                dispatcher(updateWishActionUser(wish));
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (id: string, token: string) => {
        apiWish
            .delete(id, token)
            .then((dataId) => {
                dispatcher(ac.deleteActionCreator(dataId));
                dispatcher(deleteWishActionUser(dataId));
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleSelect = (wish: WishI) => {
        apiWish
            .getWish(wish.id)
            .then(() => {
                dispatcher(ac.selectActionCreator(wish));
                navigate('/details');
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        wishes,
        handleAdd,
        handleUpdate,
        handleDelete,
        handleSelect,
        handleLoad,
    };
};
