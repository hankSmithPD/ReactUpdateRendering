import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// // Create a React element
// const element =<h1>Hello, world!</h1>;
//
// // Retrieve DOM container and create root node
// const root = ReactDOM.createRoot(document.getElementById("example"));
//
// // Rendering React elements to the root node in DOM
// root.render(element);

const root = ReactDOM.createRoot(document.getElementById("example"));

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>NOW IS {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }
//
// setInterval(tick, 1000);


// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>NOW IS  {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
//
// function tick() {
//   const root = ReactDOM.createRoot(document.getElementById("example"));
//   root.render(
//     <Clock date={new Date()} />
//   );
// }
//
// setInterval(tick, 1);


class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>NOW IS  {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  const root = ReactDOM.createRoot(document.getElementById("example"));
  root.render(
    <Clock date={new Date()} />
  );
}

setInterval(tick, 1);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
