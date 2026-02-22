import { Text, View } from 'react-native';

type Props = {
  title: string;
};

const MealItem = ({ title }: Props) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default MealItem;
