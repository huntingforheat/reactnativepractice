import React, { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2022-02-18'),
  },
];

interface ExpenseType {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

type ExpenseInput = Omit<ExpenseType, 'id'>;
type ExpensesState = ExpenseType[];
type ExpensesContextType = {
  expenses: ExpenseType[];
  addExpense: (expenseData: ExpenseInput) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expenseData: ExpenseInput) => void;
};

type ExpenseAction =
  | { type: 'ADD'; payload: ExpenseInput }
  | { type: 'UPDATE'; payload: { id: string; data: ExpenseInput } }
  | { type: 'DELETE'; payload: string };

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  addExpense: (_expenseData: ExpenseInput) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (id: string, _expenseData: ExpenseInput) => {},
});

const expenseReducer = (state: ExpensesState, action: ExpenseAction) => {
  // 새 객체와 새 배열을 사용해서 상태를 변경하지 않는 방식으로 업데이트
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense: ExpenseType) => expense.id === action.payload.id,
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter(
        (expense: ExpenseType) => expense.id !== action.payload,
      );
    default:
      return state;
  }
};

const ExpensesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData: ExpenseInput) => {
    dispatch({ type: 'ADD', payload: expenseData });
  };

  const deleteExpense = (id: string) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const updateExpense = (id: string, expenseData: ExpenseInput) => {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
