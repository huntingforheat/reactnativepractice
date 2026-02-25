import { FlatList, ListRenderItemInfo, Text } from 'react-native';
import ExpenseItem from './ExpenseItem';

type Expense = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

type Props = {
  expenses: Expense[];
};

const renderExpenseItem = ({ item }: ListRenderItemInfo<Expense>) => {
  return <ExpenseItem {...item} />;
};

const ExpensesList = ({ expenses }: Props) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
