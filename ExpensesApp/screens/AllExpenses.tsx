import ExpensesOutput from '@/components/ExpenseOutput/ExpensesOutput';
import { ExpensesContext } from '@/store/expenses-context';
import { useContext } from 'react';
import { Text } from 'react-native';

const AllExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expenseCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
};

export default AllExpenses;
