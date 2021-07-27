import { StyleSheet } from "react-native";
import { w, h, calcFont } from "../../mutils";
import { myColors } from "../../styles/myColors";


export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	image: {
		width: w(170),
		height: h(250),
		resizeMode: 'contain',
		borderRadius: 12,
		alignSelf: 'center'
	},
	title: {
		fontWeight: 'bold',
		color: myColors.black,
		fontSize: calcFont(25),
		alignSelf: 'center',
		paddingVertical: h(10)
	},
	header: {
		color: myColors.black,
		fontSize: calcFont(20),
		fontWeight: 'bold',
		paddingHorizontal: h(15),
		marginTop: h(15)
	},
	hashtages: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		width: w(340),
		marginHorizontal: w(15),
		marginVertical: h(10)
	},
	hashtagesText: {
		fontSize: calcFont(16),
		paddingHorizontal: w(10),
		paddingVertical: h(2),
		margin: w(5),
		backgroundColor: myColors.gray2,
		borderRadius: 20

	},
	percentage: {
		fontSize: calcFont(25),
		color: myColors.green,
		fontWeight: 'bold',
		alignSelf: 'center'
	},
	details: {
		color: myColors.gray1,
		fontSize: calcFont(18),
		paddingHorizontal: h(15),
		marginTop: h(5),
	},
	creditsContainer: {
		marginVertical: h(10),
		alignItems:'center'
	},
	creditsImage: {
		width: w(50),
		height: h(60),
		resizeMode: 'cover',
		borderRadius: 50 / 2,
		marginHorizontal: w(15)
	},
	creditsName: {
		color: myColors.black,
		fontSize: calcFont(18),
		alignSelf: 'center',
		paddingVertical: h(10),
		paddingHorizontal:w(15)
	}

});
