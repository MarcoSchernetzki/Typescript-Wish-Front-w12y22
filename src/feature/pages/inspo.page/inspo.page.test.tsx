import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { mockStore } from '../../../mock/mock.store';
import { MemoryRouter as Router } from 'react-router-dom';
import InspoPage from './inspo.page';
import { mockStore2 } from '../../../mock/mock.store2';

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
            render(
                <Router>
                    <Provider store={mockStore2}>
                        <InspoPage />
                    </Provider>
                </Router>
            );
            const element = screen.getByAltText(/Pulsera/i);
            expect(element).toBeInTheDocument();
        });
    });
});
