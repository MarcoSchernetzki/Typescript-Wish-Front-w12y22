import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './app';

describe('Given app component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(<App />);
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/mundo/i);
            expect(element).toBeInTheDocument();
        });
    });
});
