import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { UserRepository } from '../service/user.repository';
import * as ac from '../reducer/action.creators';
import { ProtoUserI } from '../model/user';
import { useNavigate } from 'react-router-dom';

export const useUsers = () => {
    const navigate = useNavigate();
    const users = useSelector((state: rootState) => state.users);
    const dispatcher = useDispatch();
    const apiUser = useMemo(() => new UserRepository(), []);

    const handleLogin = (user: ProtoUserI) => {
        apiUser.login(user).then((response) => {
            dispatcher(ac.loginActionCreator(response));
            if (response.token) {
                navigate('/home');
            }
        });
    };

    const handleLogout = () => {
        dispatcher(ac.logoutActionCreator());
    };

    return {
        users,
        handleLogin,
        handleLogout,
    };
};
