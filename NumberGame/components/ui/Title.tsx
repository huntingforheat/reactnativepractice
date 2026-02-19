import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
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
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    // 플랫폼 별로 다르게 처리 하고 싶을때 PlatForm 컴포넌트 사용
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});
