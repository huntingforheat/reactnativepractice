import Meal from '@/models/meal';

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};
