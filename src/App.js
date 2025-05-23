// import logo from './logo.svg';
// import './App.css';
// import UserProfile from './UserProfile'; // 引入组件
//
// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//       <div className="App">
//        <h1>我的第一个 React App!</h1>
//        <p>这是一个段落。</p>
//         <UserProfile />
//       </div>
//   );
// }
//
// export default App;


import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Click count: {count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default App;