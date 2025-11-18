import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import AppBar from './components/AppBar';

export type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <AppBar {...props} />,
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: 'MD Nav Demo' }}
          />
          <Stack.Screen 
            name="Second" 
            component={SecondScreen}
            options={{ title: 'MD Nav Demo' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
