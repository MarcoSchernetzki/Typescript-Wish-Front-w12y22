import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { appStore } from '../../../infrastructure/store/store';
import RegisterPage from './register.page';
import { Provider } from 'react-redux';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Given register.page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Registro"', () => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <RegisterPage />
                    </Router>
                </Provider>
            );
            const element = screen.getByText(/Registro/i);
            expect(element).toBeInTheDocument();
            fireEvent.input(screen.getByPlaceholderText('Nombre'));
            fireEvent.click(screen.getByRole('button'));
            expect(mockNavigate).toHaveBeenCalled();
        });
    });
});
