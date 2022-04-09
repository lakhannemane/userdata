import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './App.css'




let data = {
  theme: "light",
  name: "Aman",
  userId: "aox01",
  email: "aman1@gmail.com",
  contactNumber: "+91 9898987231",
  noOfQuestionsSolved: 120,
  codingStreak: 30,
};

ReactDOM.render(
  <App/>
  ,
  document.getElementById('root')
);


