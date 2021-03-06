import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/components/SignIn';
import Home from './src/components/Home';
import SignUp from './src/components/SignUp';

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name='Login' component={SignIn}/>
				<Stack.Screen name='Cadastro' component={SignUp}/>
				<Stack.Screen name='Home' component={Home}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
