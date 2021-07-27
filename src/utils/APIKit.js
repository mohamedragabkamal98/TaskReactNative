import axios from 'axios';

// Create axios client, pre-configured with baseURL
const APIKit = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	timeout: 15000,
});

export const API_KEY ="?api_key=4f298a53e552283bee957836a529baec"
export const IMAGE_ENDPOINT ="https://image.tmdb.org/t/p/w500"
// Set JSON Web Token in Client to be included in all calls

export default APIKit;
