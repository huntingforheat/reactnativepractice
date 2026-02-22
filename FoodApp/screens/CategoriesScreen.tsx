import { FlatList, ListRenderItemInfo } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

interface Category {
  id: string;
  title: string;
  color: string;
}

type Props = NativeStackScreenProps<RootStackParamList, 'MealsCategories'>;

const CategoriesScreen = ({ navigation }: Props) => {
  const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoriesScreen;
