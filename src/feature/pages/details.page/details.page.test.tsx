import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { mockStore } from '../../../mock/mock.store';
import { MemoryRouter as Router } from 'react-router-dom';
import DetailsPage from './details.page';
import { rootState } from '../../../infrastructure/store/store';
import { configureStore } from '@reduxjs/toolkit';
import { wishReducer } from '../../wishes/reducer/reducer';
import { Role } from '../../users/model/user';
import { WishI } from '../../wishes/model/wish';
import { userReducer } from '../../users/reducer/reducer';

describe('Given details.page component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <DetailsPage />
                    </Provider>
                </Router>
            );
        });
        test('Then it should display «deseos»', () => {
            const element = screen.getByText(/deseos/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display «Volver»', () => {
            const element = screen.getByText(/lista/i);
            expect(element).toBeInTheDocument();
            userEvent.click(screen.getByText(/Volver/i));
        });

        test('Then it should display «Eliminar»', () => {
            const element = screen.getByText(/lista/i);
            expect(element).toBeInTheDocument();
            userEvent.click(screen.getByText(/Eliminar/i));
        });

        test('Then it should display Editar', () => {
            const element = screen.getByText(/lista/i);
            expect(element).toBeInTheDocument();
            userEvent.click(screen.getByText(/Editar/i));
            userEvent.click(screen.getByText(/comprar/i));
        });
        test('Then it should display «loading»', () => {
            const preloadedState: Partial<rootState> = {};
            const mockStore = configureStore({
                reducer: {
                    wishes: wishReducer,
                },
                preloadedState,
            });
            render(
                <Router>
                    <Provider store={mockStore}>
                        <DetailsPage />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/loading/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('Given details.page', () => {
        describe('When we render the page', () => {
            test('Then it should display "Inspiration"', () => {
                const userMock = {
                    id: '1',
                    name: 'hola',
                    email: 'hola@gmail.com',
                    passwd: 'Hola123',
                    role: 'user' as Role,
                    myWishes: [],
                };

                const preloadedState: Partial<rootState> = {
                    users: {
                        user: userMock,
                        token: 'token',
                        isLogged: true,
                    },
                    wishes: {
                        wishes: [{ name: 'deseo' } as WishI],
                        selectedWish: {
                            name: 'deseo',
                            inspiration: true,
                        } as WishI,
                    },
                };

                const mockStoreTwo = configureStore({
                    reducer: {
                        users: userReducer,
                        wishes: wishReducer,
                    },
                    preloadedState,
                });

                render(
                    <Provider store={mockStoreTwo}>
                        <Router>
                            <DetailsPage />
                        </Router>
                    </Provider>
                );
                const element = screen.getByText(/lista/i);
                expect(element).toBeInTheDocument();
                userEvent.click(screen.getByPlaceholderText(/inspiracion/i));
                userEvent.click(screen.getByPlaceholderText(/lista/i));
            });
        });
    });
});
