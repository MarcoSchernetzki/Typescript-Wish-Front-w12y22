import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../infrastructure/store/store';
import UpdatePage from './update.page';
import { Provider } from 'react-redux';

describe('Given the register form component', () => {
    test('Then it should display «deseo»', () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <UpdatePage />
                </Provider>
            </Router>
        );
        const element = screen.getByText(/deseo/i);
        expect(element).toBeInTheDocument();
    });
});
