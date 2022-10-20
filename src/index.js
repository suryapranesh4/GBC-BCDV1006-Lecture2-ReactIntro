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
    <>
        <Greeter />
        <LikeButton/>
        <hr/>
        <div style={{ marginBottom : "12px"}}> Challenge </div>
        {[...Array(numberOfLikeButtons)].map((button)=>{
          return <button>Like</button>
        })}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Display/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
