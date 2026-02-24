import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const SubTitle = ({ children }: Props) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
});
