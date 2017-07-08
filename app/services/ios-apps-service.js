'use strict'; 

import axios from 'axios';

export const getApps = () => {
	return axios.get('http://localhost:3000/apps');
};


