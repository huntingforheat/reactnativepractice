import {
  View,
  Text,
  Pressable,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import Colors from '../../constants/colors';

interface Props {
  children: React.ReactNode;
  onPress: (type: GestureResponderEvent) => void;
}

const PrimaryButton = ({ children, onPress }: Props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      {/* Android랑 IOS 둘 다 효과 적용 시키는 방법 */}
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
