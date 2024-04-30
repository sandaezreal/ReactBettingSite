const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://esportapi1.p.rapidapi.com/api/esport/matches/18/12/2022',
  headers: {
    'X-RapidAPI-Key': '2de9ab751bmsh5d6ab9b509cd6d2p1bede8jsnb47290082409',
    'X-RapidAPI-Host': 'esportapi1.p.rapidapi.com'
  }
};

export const MatchSchedules = async () => {
try {
	const response = await axios.request(options);
} catch (error) {
	console.error(error);
}
};