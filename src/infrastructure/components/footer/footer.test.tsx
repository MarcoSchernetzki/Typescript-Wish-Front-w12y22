import { render, screen } from '@testing-library/react';
import { Footer } from './footer';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStore } from '../../mock/mock.store';

describe('Given footer component', () => {
    describe('When we render the component', () => {
        test('It should display iWish logo', async () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <Footer />
                    </Provider>
                </Router>
            );
            const result = await screen.findByAltText(/iWish/i);
            expect(result).toBeInTheDocument();
        });
    });
});
