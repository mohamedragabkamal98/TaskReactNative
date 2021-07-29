import React, { useState, useRef, useEffect } from "react";
import {
	View,
	FlatList,
	Text
} from "react-native";
import { styles } from "./styles";
import { PNG } from "../../assets/PNG"
import { MoveCard } from "../../components/MoveCard"
import APIKit, { API_KEY, IMAGE_ENDPOINT } from "../../utils/APIKit";
import moment from "moment";
import { strings } from "../../i18n";
import Loader from "../../components/Loader"
const Home = ({ route, navigation }) => {
	const [homeData, setHomeData] = useState(null);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		fetchHomeData()
	}, []);

	const fetchHomeData = async () => {
		//GET MOVIES LIST 
		const response = await APIKit.get(`/list/1${API_KEY}`);
		console.log(response);
		if (response.status === 200) {
			setHomeData(response.data.items ? response.data.items : []); //HANDLE NO DATA RETURN
		}
		setRefresh(false)
	};

	const refreshList = () => {
		setRefresh(true) // SET REFRESH STATE BY TRUE
		fetchHomeData()
	}
	return (
		<View style={styles.container}>
			{!homeData || refresh ?
				<Loader /> /*PAGE LOADER*/
				:
				<FlatList
					data={homeData}
					refreshing={refresh}
					onRefresh={() => refreshList()}
					// refreshControl={() => refreshList()}
					renderItem={({ item }) => {
						return (
							<MoveCard
								image={{ uri: `${IMAGE_ENDPOINT}${item.poster_path}` }} // MOVIE COVER IMAGE
								title={item.title} // MOVIE NAME
								date={moment(item.release_date).format('MMMM DD,YYYY')} // MOVIE RELEASED DATE
								percentage={item.vote_average * 10} // VOTE AVERAGE FROM 100%
								geners={item.genre_ids} // MOVIE CATEGORY TYPE "GENRE"
								onPress={() => navigation.navigate('Details', { data: item })} // NAVIGATE TO MOVIE DETAILS

							/>
						)
					}}
					showsVerticalScrollIndicator={false}
					ListEmptyComponent={                           // IF NO DATA 
						<View style={{ flex: 1, height: 500 }}>
							<Text style={styles.noResult}>{strings('noResult')}</Text>
						</View>
					}
				/>}
		</View>
	);
};

export { Home };
