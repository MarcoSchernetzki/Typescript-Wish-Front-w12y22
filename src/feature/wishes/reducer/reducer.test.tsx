import { actionTypes } from './action.types';
import { WishI } from '../model/wish';
import { wishReducer } from './reducer';

describe('Given the function wishReducer', () => {
    const mock: Array<WishI> = [
        {
            id: '',
            category: null,
            inspiration: false,
            name: 'wish',
            image: '',
            origin: '',
            price: '',
            comments: '',
            comeTrue: false,
            owner: null,
        },
    ];

    const newMockWish: WishI = {
        id: '',
        category: null,
        inspiration: true,
        name: 'WishFour',
        image: 'imageFour',
        origin: 'originFour',
        price: 'priceFour',
        comments: 'commentsFour',
        comeTrue: false,
        owner: null,
    };

    let action: { type: string; payload: unknown };
    let state: { wishes: Array<WishI>; selectedWish: WishI | null };

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.load,
                payload: mock,
            };
            state = { wishes: [], selectedWish: null };
        });
        test('Then the returned state should be the action payload', () => {
            const result = wishReducer(state, action);
            expect(result).toEqual({
                wishes: action.payload,
                selectedWish: null,
            });
        });
    });

    describe('When the action is add', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: newMockWish,
            };
            state = { wishes: [], selectedWish: null };
        });
        test('Then the returned state should include the action payload', () => {
            const result = wishReducer(state, action);
            expect(result).toEqual({
                wishes: [action.payload],
                selectedWish: null,
            });
        });
    });

    describe('When the action is update', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...mock[0], name: 'Update wish' },
            };
            state = { wishes: mock, selectedWish: null };
        });
        test('Then the returned state should include the action payload', () => {
            const result = wishReducer(state, action);
            expect(result).toEqual({
                wishes: [action.payload],
                selectedWish: null,
            });
        });
    });

    describe('When the action is update and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...mock, id: '3', title: 'Update title' },
            };
            state = { wishes: mock, selectedWish: null };
        });
        test('Then the returned state should be the original state', () => {
            const result = wishReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is delete', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: mock[0].id,
            };
            state = { wishes: mock, selectedWish: null };
        });
        test('Then the returned state should not include the action payload', () => {
            const result = wishReducer(state, action);
            expect(result).toEqual({ wishes: [], selectedWish: null });
        });
    });

    describe('When the action is delete and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: { ...mock, id: '3' },
            };
            state = { wishes: mock, selectedWish: null };
        });
        test('Then the returned state should incluide the selected wish', () => {
            const result = wishReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is select', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.select,
                payload: mock[0],
            };
            state = { wishes: mock, selectedWish: null };
        });
        test('Then the returned state should be the original state', () => {
            const result = wishReducer(state, action);
            expect(result).toEqual({ wishes: mock, selectedWish: mock[0] });
        });
    });

    describe('When the action is comeTrue', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.comeTrue,
                payload: true,
            };
            state = { wishes: mock, selectedWish: mock[0] };
        });
        test('Then the returned state should include the action payload', () => {
            const result = wishReducer(state, action);
            expect(result).toEqual({
                wishes: mock,
                selectedWish: { ...mock[0], comeTrue: true },
            });
        });
    });

    describe('When the action is any other', () => {
        beforeEach(() => {
            action = {
                type: '',
                payload: null,
            };
            state = { wishes: mock, selectedWish: null };
        });
        test('Then the returned state should not change', () => {
            const result = wishReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
