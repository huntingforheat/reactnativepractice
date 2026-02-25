import ExpensesOutput from '@/components/ExpenseOutput/ExpensesOutput';
import { Text } from 'react-native';

const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
};

export default RecentExpenses;
