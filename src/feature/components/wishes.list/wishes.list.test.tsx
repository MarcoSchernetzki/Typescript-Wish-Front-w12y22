import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { WishI } from '../../wishes/model/wish';
import { wishReducer } from '../../wishes/reducer/reducer';
import { WishesList } from './wishes.list';
import { rootState } from '../../../infrastructure/store/store';
import { mockStore2 } from '../../../mock/mock.store2';

describe('Given wishes.list component', () => {
    describe('When we render the component', () => {
        test('Then it should display the name of any wish in the list', () => {
            render(
                <Router>
                    <Provider store={mockStore2}>
                        <WishesList />
                    </Provider>
                </Router>
            );
            const element = screen.getByAltText(/pulsera/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display «loading»', () => {
            const wishMock = {
                name: 'Reloj',
                image: 'url',
                origin: 'Rolex',
                price: '6.000',
                comments: 'Reloj hombre',
            } as WishI;

            const preloadedState: Partial<rootState> = {
                wishes: {
                    wishes: [wishMock],
                    selectedWish: wishMock,
                },
            };

            const mockStore = configureStore({
                reducer: {
                    wishes: wishReducer,
                },
                preloadedState,
            });
            render(
                <Router>
                    <Provider store={mockStore}>
                        <WishesList />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/loading/i);
            expect(element).toBeInTheDocument();
        });
    });
});
