'use strict'; 

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.scss';

import 'bootstrap/dist/js/bootstrap.js';

import Pryxma from 'Pryxma';

ReactDOM.render(
	<Pryxma />,
	document.getElementById('app')
);
