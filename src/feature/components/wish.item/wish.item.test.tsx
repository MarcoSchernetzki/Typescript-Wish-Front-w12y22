import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { WishI } from '../../wishes/model/wish';
import { mockStore } from '../../../mock/mock.store';
import { WishItem } from './wish.item';

describe('Given wish.item component', () => {
    describe('When we render the component', () => {
        test('Then it should display', async () => {
            const mockProduct: WishI = {
                id: '',
                category: null,
                inspiration: true,
                name: 'WishOne',
                image: 'imageOne',
                origin: 'originOne',
                price: 'priceOne',
                comments: 'commentsOne',
                comeTrue: false,
                owner: null,
            };

            render(
                <Router>
                    <Provider store={mockStore}>
                        <WishItem item={mockProduct} />
                    </Provider>
                </Router>
            );

            const element = screen.getByAltText('WishOne');
            expect(element).toBeInTheDocument();
            userEvent.click(await screen.findByAltText('WishOne'));
        });
    });
});
