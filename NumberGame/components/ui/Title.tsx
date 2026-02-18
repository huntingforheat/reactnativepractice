import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});
