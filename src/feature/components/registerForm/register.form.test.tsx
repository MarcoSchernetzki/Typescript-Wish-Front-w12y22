import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../infrastructure/store/store';
import { RegisterForm } from './register.form';

describe('Given the register form component', () => {
    beforeEach(() => {
        render(
            <Router>
                <Provider store={appStore}>
                    <RegisterForm />
                </Provider>
            </Router>
        );
    });

    test('It should register a user after clicking in «crear una cuenta» button', () => {
        const firstTextInput = screen.getByPlaceholderText('Nombre');
        expect(firstTextInput).toBeInTheDocument();
        userEvent.click(screen.getByText(/cuenta/i));
    });
});
