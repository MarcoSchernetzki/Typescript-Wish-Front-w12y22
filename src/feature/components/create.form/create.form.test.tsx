import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../infrastructure/store/store';
import CreateForm from './create.form';

describe('Given the create.form component', () => {
    test('It should display «cancelar» button', () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <CreateForm />
                </Provider>
            </Router>
        );
        const firstTextInput = screen.getByPlaceholderText('Nombre');
        expect(firstTextInput).toBeInTheDocument();
        userEvent.click(screen.getByText(/cancelar/i));
    });

    test('It should display «guardar» button', () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <CreateForm />
                </Provider>
            </Router>
        );
        const element = screen.getByText(/guardar/i);
        expect(element).toBeInTheDocument();
        fireEvent.click(screen.getByText('Guardar'));
        fireEvent.input(screen.getByPlaceholderText('Nombre'));
    });
});
