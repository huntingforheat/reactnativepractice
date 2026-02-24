import { MEALS, CATEGORIES } from '../data/dummy-data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import { useEffect, useLayoutEffect } from 'react';
import MealsList from '@/components/MealsList/MealsList';

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

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
