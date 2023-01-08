import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { appStore } from '../../../infrastructure/store/store';
import { WishI } from '../model/wish';
import { WishRepository } from '../service/wish.repository';
import { useWishes } from './use.wishes';

const wishMock: { wish: WishI; token: string } = {
    wish: {
        id: '1',
        name: 'Pulsera',
        image: '',
        origin: '',
        price: '1.000',
        comments: 'Pandora',
        category: 'christmas',
        comeTrue: false,
        inspiration: false,
        owner: null,
    },
    token: '123',
};

jest.mock('../service/wish.repository');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

let result: {
    current: {
        wishes: { wishes: Array<WishI>; selectedWish: WishI | null };
        handleAdd: (newWish: WishI, token: string) => void;
        handleUpdate: (
            id: string,
            updateWish: Partial<WishI>,
            token: string
        ) => void;
        handleDelete: (id: string, token: string) => void;
        handleSelect: (wish: WishI) => void;
        handleLoad: () => void;
    };
};

describe('Given useUsers', () => {
    beforeEach(() => {
        console.log = jest.fn();

        WishRepository.prototype.create = jest
            .fn()
            .mockResolvedValue({ wishes: wishMock.wish });
        WishRepository.prototype.getAllWishes = jest
            .fn()
            .mockRejectedValue(new Error());
        WishRepository.prototype.update = jest
            .fn()
            .mockResolvedValue(wishMock.wish);
        WishRepository.prototype.delete = jest
            .fn()
            .mockResolvedValue(wishMock.wish.id);
        WishRepository.prototype.getWish = jest
            .fn()
            .mockResolvedValue(wishMock.wish);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useWishes(), { wrapper }));
    });
    describe('When it has been run handleAdd and it has called handleAdd', () => {
        test('Then should return a promise of wish created', async () => {
            await waitFor(() => {
                result.current.handleAdd(wishMock.wish, wishMock.token);
            });
            expect(WishRepository.prototype.create).toHaveBeenCalled();
            expect(useNavigate).toHaveBeenCalled();
        });
    });

    describe('When it has been run handleUpdate and it has called handleUpdate', () => {
        test('Then should return a promise of wish updated', async () => {
            await waitFor(() => {
                result.current.handleUpdate(
                    wishMock.wish.id,
                    wishMock.wish,
                    wishMock.token
                );
                expect(WishRepository.prototype.update).toHaveBeenCalled();
            });
        });
    });

    describe('When it has been run handleDelete and it has called handleDelete', () => {
        test('Then should return the id of the wish deleted', async () => {
            await waitFor(() => {
                result.current.handleDelete(wishMock.wish.id, wishMock.token);
                expect(WishRepository.prototype.delete).toHaveBeenCalled();
            });
        });
    });

    describe('When it has been run handleSelect and it has called handleSelect', () => {
        test('Then should return a promise of the wish selected', async () => {
            await waitFor(() => {
                result.current.handleSelect(wishMock.wish);
                expect(WishRepository.prototype.getWish).toHaveBeenCalled();
            });
        });
        test('Then should return a promise of wish created', async () => {
            await waitFor(() => {
                result.current.handleSelect(wishMock.wish);
                expect(WishRepository.prototype.getWish).toHaveBeenCalled();
            });
        });
        describe('When it has been run handleLoad and it has called handleLoad', () => {
            test('Then should return a promise of wish created', async () => {
                await waitFor(() => {
                    result.current.handleLoad();
                });
                expect(console.log).toHaveBeenCalled();
            });
            test('Then should return a promise of the wish selected', async () => {
                (
                    WishRepository.prototype.getAllWishes as jest.Mock
                ).mockResolvedValue({ wishes: [wishMock] });
                await waitFor(() => {
                    result.current.handleLoad();
                });
                expect(
                    WishRepository.prototype.getAllWishes
                ).toHaveBeenCalled();
            });
        });
    });
});

describe('Given hook', () => {
    beforeEach(() => {
        console.log = jest.fn();
        WishRepository.prototype.delete = jest.fn().mockRejectedValue(Error);
        WishRepository.prototype.getWish = jest.fn().mockRejectedValue(Error);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useWishes(), { wrapper }));
    });
    describe('When it has been run handleDelete and it has called handleDelete incorrectly', () => {
        test('Then should return an error', async () => {
            await waitFor(() => {
                result.current.handleDelete(wishMock.wish.id, wishMock.token);
            });
            expect(WishRepository.prototype.delete).toHaveBeenCalled();
        });
    });

    describe('When it has been run handleSelect and it has called handleSelect incorrectly', () => {
        test('Then should return an error', async () => {
            await waitFor(() => {
                result.current.handleSelect(wishMock.wish);
            });
            expect(WishRepository.prototype.getWish).toHaveBeenCalled();
        });
    });
});
