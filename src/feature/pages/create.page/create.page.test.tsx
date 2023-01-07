import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockStore } from '../../../mock/mock.store';
import { MemoryRouter as Router } from 'react-router-dom';
import CreatePage from './create.page';

describe('Given create.page component', () => {
    describe('When we render the component', () => {
        test('Then it should display «deseo»', () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <CreatePage />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/deseo/i);
            expect(element).toBeInTheDocument();
        });
    });
});
