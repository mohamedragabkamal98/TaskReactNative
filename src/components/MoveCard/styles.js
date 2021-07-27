import { StyleSheet } from "react-native";
import { w, h, calcFont } from "../../mutils";
import { myColors } from "../../styles/myColors";


export const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		marginVertical: h(10),
		flex: 1
	},
	rowContainer: {
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: w(15),
		marginVertical: h(10),
		marginHorizontal: w(10),
		paddingVertical: h(25),
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,

	},
	image: {
		width: w(100),
		height: h(180),
		resizeMode: 'cover',
		borderRadius: 12
	},
	title: {
		fontWeight: 'bold',
		color: myColors.gray1,
		fontSize: calcFont(22),
		width:w(165)
	},
	date: {
		color: myColors.gray1,
		fontSize: calcFont(18),
		marginTop:h(10)
	},
	hashtages: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		width: w(160),
		marginVertical: h(15)
	},
	hashtagesText: {
		fontSize: calcFont(16),
		paddingHorizontal: w(10),
		paddingVertical: h(2),
		margin: w(2),
		backgroundColor: myColors.gray2,
		borderRadius: 20

	},
	percentage: {
		fontSize: calcFont(25),
		color: myColors.green,
		fontWeight: 'bold',
		alignSelf: 'flex-end',
	}

});
