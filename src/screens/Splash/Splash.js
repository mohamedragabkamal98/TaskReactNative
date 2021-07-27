import React, { useEffect, useState } from "react";
import {
	View,
} from "react-native";
import { STYLES } from "./styles";
import SVG from "../../assets/SVG";

// Helpers
import { StackActions } from '@react-navigation/native';
const Splash = ({ navigation, onSuccess }) => {

	useEffect(() => {
		navigation.dispatch(
			StackActions.replace('Home')
		  );
		}, [])

	

	return (
		<View style={STYLES.container}>
			<SVG source="Logo" width={100} height={100} />
		</View>
	);
};

export { Splash };
