import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ text, id, onDeleteItem }) => {
  {
    /* 터치를 가능하게 해주는 Pressable 컴포넌트 */
  }
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#5e0acc' }}
        onPress={() => onDeleteItem(id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
  },
});
