import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { appStore } from '../../../infrastructure/store/store';
import { Provider } from 'react-redux';
import LoginPage from './login.page';

describe('Given login.page', () => {
    describe('When we render the page', () => {
        test('Then it should display «Acceso»', async () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <LoginPage />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/acceso/i);
            expect(element).toBeInTheDocument();
            fireEvent.click(screen.getByText(/acceso/i));
            fireEvent.click(screen.getByRole(/link/i));
            fireEvent.input(await screen.findByPlaceholderText(/Email/i));
        });
    });
});
