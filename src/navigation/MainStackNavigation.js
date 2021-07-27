import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import {
	Splash,
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
				
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default MainStackNavigation
