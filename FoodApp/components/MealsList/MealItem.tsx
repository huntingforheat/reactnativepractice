import FoodInfo from '@/screens/MealDetailScreen';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import MealDetails from '../MealDetails';

type Props = {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MealDetail'
>;

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: Props) => {
  const navigation = useNavigation<NavigationProp>();

  const selectMealItemHandler = () => {
    // 여기서 App.tsx에서 등록한 상세 페이지 식별자 사용
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          {/* 웹 상에서 불러오는 이미지는 StyleSheet를 통해 따로 스타일링 해줘야함 */}
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
