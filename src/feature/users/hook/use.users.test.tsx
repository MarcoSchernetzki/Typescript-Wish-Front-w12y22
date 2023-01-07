import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockStore, userMock, userMockToken } from '../../../mock/mock.store';
import { ProtoUserI, UserI } from '../model/user';
import { UserRepository } from '../service/user.repository';
import { useUsers } from './use.users';

const mockNavigate = jest.fn();
jest.mock('../service/user.repository');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

let result: {
    current: {
        users: {
            user: UserI | null;
            token: string | null;
            isLogged: boolean;
        };
        handleLogin: (user: ProtoUserI) => void;
    };
};

describe('Given useUsers', () => {
    beforeEach(() => {
        UserRepository.prototype.login = jest
            .fn()
            .mockResolvedValue(userMockToken);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={mockStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useUsers(), { wrapper }));
    });
    describe('When it has been run handleLogin and it has called handleLogin', () => {
        test('Then should return a promise of user', () => {
            result.current.handleLogin({
                email: userMock.email,
                passwd: userMock.passwd,
            } as UserI);
            expect(UserRepository.prototype.login).toHaveBeenCalled();
        });
    });
});
