import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type SecondScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Second'>;

type Props = {
  navigation: SecondScreenNavigationProp;
};

export default function SecondScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">SecondScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
