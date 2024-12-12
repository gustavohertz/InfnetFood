import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import ProdutosScreen from './screens/Produtos';
import CarrinhoScreen from './screens/Carrinho';
import PerfilScreen from './screens/Perfil';
import PedidosScreen from './screens/Pedidos';
import MapaSimulado from './screens/MapaSimulado';
import DetalhesRestaurante from './screens/DetalhesRestaurante';
import CheckoutScreen from './screens/CheckOut';
import ConfiguracoesScreen from './screens/ConfiguracoesScreen';
import { ThemeProvider } from './screens/ThemeContext';
import Notifications from './screens/Notificacoes'

const Stack = createNativeStackNavigator();

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Produtos"
            component={ProdutosScreen}
            initialParams={{ carrinho, setCarrinho }}
          />
          <Stack.Screen name="Carrinho" component={CarrinhoScreen} />
          <Stack.Screen name="Perfil" component={PerfilScreen} />
          <Stack.Screen name="Pedidos" component={PedidosScreen} />
          <Stack.Screen name="MapaSimulado" component={MapaSimulado} />
          <Stack.Screen name="DetalhesRestaurante" component={DetalhesRestaurante} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="ConfiguracoesScreen" component={ConfiguracoesScreen} />
          <Stack.Screen name="Notificacoes" component={Notifications}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
