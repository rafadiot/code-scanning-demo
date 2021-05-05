const axios = require('axios');

let url = 'http://127.0.0.1';
let authorization = 'Bearer eyJraWQiOiJ6b1BXdG4wMEd5Nl';

const getPost = async () => {
	return await axios.get('http://127.0.0.1', { headers: { Authorization: authorization } });
};

console.log(getPost);
