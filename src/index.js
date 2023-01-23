import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import StyledComp from './Styled_Components/index.jsx'
// import Youtube from './YouTube_Clone/index.jsx';
// import Youtube from './YouTube_Clone/index.jsx';
import Lesson9 from './lesson-9/index.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Lesson9/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
