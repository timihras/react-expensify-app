import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should retun 0 if no expenses', () => {
  const total = selectExpenseTotal([]);

  expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
  const total = selectExpenseTotal([expenses[1]]);

  expect(total).toBe(109500);
});

test('should correctly add up a multiple expenses', () => {
  const total = selectExpenseTotal(expenses);

  expect(total).toBe(114195);
});