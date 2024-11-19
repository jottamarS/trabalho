import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Pages/Login'; // Tela de login
import Register from './src/Pages/Register'; // Tela de cadastro
import Filmes from './src/Pages/Filmes'; // Tela principal (lista de filmes)

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Filmes" component={Filmes} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
