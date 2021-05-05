const axios = require('axios');

let url = 'http://127.0.0.1';

const getPost = async () => {
	return await axios.get('http://127.0.0.1', { headers: { Authorization: 'Bearer eyJraWQiOiJ6b1BXdG4wMEd5Nl' } });
};

console.log(getPost);
