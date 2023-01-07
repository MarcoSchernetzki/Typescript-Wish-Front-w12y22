import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { mockStore } from '../../../mock/mock.store';
import { HomePage } from './home.page';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given home.page component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <HomePage />
                    </Provider>
                </Router>
            );
        });

        test('Then it should display «lista»', () => {
            const element = screen.getByText(/lista/i);
            expect(element).toBeInTheDocument();
            userEvent.click(screen.getByText(/Añade/i));
        });

        test('Then it should display «Inspírate»', () => {
            const element = screen.getByText(/lista/i);
            expect(element).toBeInTheDocument();
            userEvent.click(screen.getByText(/Inspírate/i));
        });
    });
});
