import axios from 'axios';

// Create axios client, pre-configured with baseURL
const APIKit = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	timeout: 15000,
});


// Set JSON Web Token in Client to be included in all calls

export default APIKit;
