import React, { useState, useRef, useEffect } from "react";
import {
	View,
	FlatList
} from "react-native";
import { styles } from "./styles";
import { PNG } from "../../assets/PNG"
import { MoveCard } from "../../components/MoveCard"
import APIKit,{API_KEY,IMAGE_ENDPOINT} from "../../utils/APIKit";
import moment from "moment";

const Home = ({ route, navigation }) => {
	const [homeData, setHomeData] = useState([]);

	useEffect(() => {
		fetchHomeData()
	}, []);

	const fetchHomeData = async () => {
		const response = await APIKit.get(`/list/1${API_KEY}`);
		console.log(response);
		if (response.status === 200) {
			setHomeData(response.data.items);

		}
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={homeData}
				renderItem={({item}) => {
					return (
						<MoveCard
							image={{ uri: `${IMAGE_ENDPOINT}${item.poster_path}` }}
							title={item.title}
							date={moment(item.release_date).format('MMMM DD,YYYY')}
							percentage={item.vote_average * 10}
							geners={item.genre_ids}
							onPress={() => navigation.navigate('Details', { data: item })}

						/>
					)
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export { Home };
