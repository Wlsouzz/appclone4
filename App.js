import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import CalculadoraScreen from './screens/CalculadoraScreen';
import BanheiroScreen from './screens/BanheiroScreen';
import PiaSreen from './screens/PiaScreen';
import ContatoScreen from './screens/ContatoScreen';



// Configurando o Navegador
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Calculadora" component={CalculadoraScreen} />
        <Stack.Screen name="Banheiro" component={BanheiroScreen} /> 
        <Stack.Screen name="Contato" component={ContatoScreen} /> 
        <Stack.Screen name="Pia" component={PiaSreen} /> 
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
