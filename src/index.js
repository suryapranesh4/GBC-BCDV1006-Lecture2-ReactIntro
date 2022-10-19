import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Greeter from './Greeter';
import LikeButton from './LikeButton';
import reportWebVitals from './reportWebVitals';

const Display = () => {
  const numberOfLikeButtons = 10;
  return(
    [...Array(numberOfLikeButtons)].map((button)=>{
      return <button>Like</button>
    })
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <div>
        <span>Exercise 1-5</span>
        <Greeter />
        <LikeButton/>
        <hr/>
      </div>
      <div>
        <div>Exercise 6 / Challenge </div>
        <Display/>
      </div>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
