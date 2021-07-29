import React, { useState, useEffect } from "react";
import {
	Text,
	View,
	ScrollView,
	Image,
} from "react-native";
import { styles } from "./styles";
import { strings } from "../../i18n";
import APIKit, { API_KEY, IMAGE_ENDPOINT } from "../../utils/APIKit";

const Details = ({ route, navigation }) => {
	const [data, setData] = useState(route.params.data);
	const [details, setDetails] = useState({});

	useEffect(() => {
		fetchMovieDetails()
	}, []);

	const fetchMovieDetails = async () => {
		//GET MOVIE DETAILS BY ID
		const response = await APIKit.get(`/movie/${data.id}${API_KEY}`);
		console.log(response);
		if (response.status === 200) {
			setDetails(response.data);

		}
	};
	const renderGeners = () => {
		//SHOW MOVIE CATEGORY TYPE "GENRE"
		return (
			<>
				{details.genres && <View style={styles.hashtages}>
					{details.genres.map(item => { return <Text style={styles.hashtagesText}>{item.name}</Text> })}
				</View>}
			</>
		)
	}
	const renderCredites = () => {
		//SHOW CREDITS OF THE MOVIE
		return (
			<>
				{details.production_companies && <View style={styles.hashtages}>
					{details.production_companies.map(item => {
						return (
							<View style={styles.creditsContainer}>
								<Image style={styles.creditsImage} source={{ uri: `${IMAGE_ENDPOINT}${item.logo_path}` }} />
								<Text style={styles.creditsName}>{item.name}</Text>
							</View>
						)
					})}
				</View>}
			</>
		)
	}

	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500${details.poster_path}` }} />
				<Text style={styles.title}>{details.title}</Text>
				<Text style={styles.percentage}>{details.vote_average * 10}%</Text>
				<Text style={styles.header}>{strings('Overview')}</Text>
				<Text style={styles.details}>{details.overview}</Text>
				<Text style={styles.header}>{strings('Genres')}</Text>
				{renderGeners()}
				<Text style={[styles.header]}>{strings('Credites')}</Text>
				{renderCredites()}
			</ScrollView>
		</View>
	);
};

export { Details };
