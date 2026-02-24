import { RootStackParamList } from '@/types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '@/components/MealDetails';
import SubTitle from '@/components/MealDetail/Subtitle';
import List from '@/components/MealDetail/List';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '@/components/IconButton';
import { FavoritesContext } from '@/store/context/favorites-context';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;

const MealDetailScreen = ({ route, navigation }: NavigationProps) => {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const mealId = route.params.mealId;

  // 즐겨찾기에 등록 되어 있는 경우
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal?.ingredients} />
          <SubTitle>Steps</SubTitle>
          {/* 문자열이어서 FlatList를 사용하지 않고 map으로 그냥 매핑함 */}
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
