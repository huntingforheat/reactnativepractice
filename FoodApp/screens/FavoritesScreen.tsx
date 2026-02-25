import MealsList from '@/components/MealsList/MealsList';
import { MEALS } from '@/data/dummy-data';
import { FavoritesContext } from '@/store/context/favorites-context';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { RootState } from '@/store/redux/store';
import { useSelector } from 'react-redux';

const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(
    (state: RootState) => state.favoriteMeals.ids,
  );

  // 모든 id를 검사해서 포함되어 있는 meal.id를 검색
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id),
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>즐겨찾기 한 항목이 없습니다</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
