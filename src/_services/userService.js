import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameComponent from './gameComponent.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, Navigate, Outlet, Switch } from 'react-router-dom';
import Crime from './components/game/crime.jsx';
import PrivateRoute from './PrivateRoute';
import Login from './components/login/login.jsx';

import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}