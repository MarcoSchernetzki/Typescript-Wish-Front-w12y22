import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { mockStore } from '../../mock/mock.store';

describe('Given header component', () => {
    describe('When we render the component', () => {
        test('It should display «cuenta»', async () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <Header />
                    </Provider>
                </Router>
            );
            const result = await screen.findByText(/Cuenta/i);
            expect(result).toBeInTheDocument();
            userEvent.click(screen.getByRole('button'));
        });
    });
});
