import React from 'react';
import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function AppBar({ navigation, route, options, back }: NativeStackHeaderProps) {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : null}
      <Appbar.Content title={options.title || route.name} />
      {!back ? (
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second' as never)} />
      ) : null}
    </Appbar.Header>
  );
}
