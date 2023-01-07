import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { mockStore } from '../../../mock/mock.store';
import { MemoryRouter as Router } from 'react-router-dom';
import InspoPage from './inspo.page';
import { WishI } from '../../wishes/model/wish';
import { UserI } from '../../users/model/user';
import { rootState } from '../../../infrastructure/store/store';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../users/reducer/reducer';
import { wishReducer } from '../../wishes/reducer/reducer';

describe('Given inspo.page component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <InspoPage />
                    </Provider>
                </Router>
            );
        });
        test('Then it should display «deseo»', () => {
            const element = screen.getByText(/regalo/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display Editar', () => {
            const element = screen.getByText(/lista/i);
            expect(element).toBeInTheDocument();
            userEvent.click(screen.getByText(/lista/i));
        });
    });

    describe('When we load inspiration', () => {
        test('Then it should display the name of any wish in the list', () => {
            const wishMock = {
                name: 'Pulsera',
                image: '',
                origin: 'El Corte Inglés',
                price: '500',
                inspiration: true,
                comments: 'Pulsera plateada',
            } as WishI;

            const userMock = {
                id: '1',
                name: 'Carlos',
                email: 'carlos@gmail.com',
                passwd: 'Carlos123',
                role: 'user',
                myWishes: [wishMock],
            } as UserI;

            const preloadedState: Partial<rootState> = {
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

            const mockStore = configureStore({
                reducer: {
                    users: userReducer,
                    wishes: wishReducer,
                },
                preloadedState,
            });
            render(
                <Router>
                    <Provider store={mockStore}>
                        <InspoPage />
                    </Provider>
                </Router>
            );
            const element = screen.getByAltText(/Pulsera/i);
            expect(element).toBeInTheDocument();
        });
    });
});
