import Button from '@/components/UI/Button';
import IconButton from '@/components/UI/IconButton';
import { GlobalStyles } from '@/constants/styles';
import { ExpensesContext } from '@/store/expenses-context';
import { RootStackParamList } from '@/types/navigation.type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'ManageExpense'
>;

const ManageExpense = ({ route, navigation }: NavigationProps) => {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    // setOptions는 컴포넌트에서 바로 호출하면 안됨 useEffect로 감싸거나 해야 함
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    if (!editedExpenseId) {
      return;
    }

    expensesCtx.deleteExpense(editedExpenseId);
    // 뒤로 가기 함수 - 여기서는 모달 닫기
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing) {
      // Edit Expense인 경우
      expensesCtx.updateExpense(editedExpenseId, {
        description: 'Test!!!',
        amount: 29.99,
        date: new Date('2022-05-20'),
      });

      // Add Expense인 경우
    } else {
      expensesCtx.addExpense({
        description: 'Test',
        amount: 19.99,
        date: new Date('2022-05-19'),
      });
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
