import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../infrastructure/store/store';
import LoginForm from './login.form';

describe('Given the login form component', () => {
    beforeEach(() => {
        render(
            <Router>
                <Provider store={appStore}>
                    <LoginForm />
                </Provider>
            </Router>
        );
    });

    test('It should register a user after clicking in «crear una cuenta» button', () => {
        const firstTextInput = screen.getByPlaceholderText('Email');
        expect(firstTextInput).toBeInTheDocument();
        userEvent.click(screen.getByText(/entrar/i));
    });
});
