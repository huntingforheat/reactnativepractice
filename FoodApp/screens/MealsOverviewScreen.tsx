import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { StaticScreenProps } from '@react-navigation/native';
import { MealType } from '../types/meal.type';
import MealItem from '../components/MealItem';

type Props = StaticScreenProps<{
  categoryId: string;
}>;

const MealsOverviewScreen = ({ route }: Props) => {
  // CategoriesScreen에서 매개변수로 categoryId를 넘겨 줬으므로 이렇게 사용이 가능
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData: ListRenderItemInfo<MealType>) => {
    return <MealItem title={itemData.item.title} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
