import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';

type Props = {
  icon: ComponentProps<typeof Ionicons>['name'];
  color: string;
  onPress: () => void;
};

const IconButton = ({ icon, color, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
