import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { StaticScreenProps } from '@react-navigation/native';
import { MealType } from '../types/meal.type';
import MealItem from '../components/MealItem';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import { useEffect, useLayoutEffect } from 'react';

// navigation 타입 동적으로 받는법
type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;

const MealsOverviewScreen = ({ route, navigation }: Props) => {
  console.log('wjqrms');

  // CategoriesScreen에서 매개변수로 categoryId를 넘겨 줬으므로 이렇게 사용이 가능
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // 컴포넌트 실행될 떄 실행 되도록 useLayoutEffect() 사용
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId,
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const renderMealItem = (itemData: ListRenderItemInfo<MealType>) => {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return (
      <MealItem
        {...mealItemProps}
        onPress={() => navigation.navigate('FoodInfo', { mealItem: item })}
      />
    );
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
