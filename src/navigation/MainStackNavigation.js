import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import {
	Splash,
	Home,
	Details
} from "../screens";
import { myColors } from '../styles';
import { strings } from '../i18n';

const Stack = createStackNavigator()
const MainStackNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Splash"
					component={Splash}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						title: strings("Movies"),
						headerShown: true,
						headerStyle: {
							height: Platform.OS == 'ios' ? 115 : 70,
							backgroundColor:myColors.background
						},
						headerTitleStyle: {
							fontSize:28,
							fontWeight:'bold',
						},
					}}
				/>
				<Stack.Screen
					name="Details"
					component={Details}
					options={{
						title: "",
						headerShown: true,
						headerStyle: {
							height: Platform.OS == 'ios' ? 115 : 70,
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default MainStackNavigation
