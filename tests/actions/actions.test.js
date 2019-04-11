import {calcCashWithoutApi} from '../../src/actions/actions';

describe('calcCashWithoutApi tests', () => {
    const incomeData = [
        [25, {cash: [{note: 20, noteQty: 1}], restAmount: 5}],
        [0, {cash: [], restAmount: 0}],
        [1080, {
            cash: [
                {note: 100, noteQty: 10},
                {note: 50, noteQty: 1},
                {note: 20, noteQty: 1},
                {note: 10, noteQty: 1}
            ],
            restAmount: 0
        }],
    ];
    test.each(incomeData)(
        'call calcCashWithoutApi() with amount %p - wait result %p',
        (amount, expected) => {
            expect(calcCashWithoutApi(amount)).toEqual(expected);
        },
    );
});