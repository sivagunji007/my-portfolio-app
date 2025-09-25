/**
 * File Name: App.jsx
 * Description: Main application component with routing
 * Student Name: Sivaprasad Gunji
 * Student ID: 301546700
 * Date: September 25, 2025
 */


// === Imports and Setup ===
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'

const App = () => {
  return (
    <Router>

        <MainRouter />

    </Router>
  );
};

export default App;
