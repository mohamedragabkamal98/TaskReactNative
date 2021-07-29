import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native';
import { fullHeight} from '../../mutils';


export default Loader = (props) => {
		return (
		<View
			style={{
				width: '100%',
				height: fullHeight()*0.8,
				backgroundColor: 'transparent',
				position: 'absolute',
				zIndex: 10000,
				// justifyContent: 'center',
				alignItems: 'center',
				alignSelf: 'center'

			}}
		>
			<LottieView source={require('../../assets/Animation/Loading.json')} autoPlay loop />
		</View>
	)
}
