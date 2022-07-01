import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import LogIn from './src/screens/LogIn';
import {Routes} from './src/navigation/Routes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.LogIn} component={LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
