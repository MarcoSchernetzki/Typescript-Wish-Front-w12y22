import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../infrastructure/store/store';
import UpdateForm from './update.form';

describe('Given the create.form component', () => {
    test('It should update a user after clicking in «guardar» button', () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <UpdateForm />
                </Provider>
            </Router>
        );
        const firstTextInput = screen.getByText('Cancelar');
        expect(firstTextInput).toBeInTheDocument();
        fireEvent.input(screen.getByPlaceholderText(/name/i));
        userEvent.click(screen.getByText(/guardar/i));
    });

    test('It should cancel and go home', () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <UpdateForm />
                </Provider>
            </Router>
        );
        const element = screen.getByText(/cancelar/i);
        expect(element).toBeInTheDocument();
        userEvent.click(screen.getByText(/cancelar/i));
    });
});
