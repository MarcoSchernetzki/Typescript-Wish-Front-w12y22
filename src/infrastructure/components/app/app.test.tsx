import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './app';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';

describe('Given app component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <App />
                    </Provider>{' '}
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/cuenta/i);
            expect(element).toBeInTheDocument();
        });
    });
});
