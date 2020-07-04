import React from 'react';
import logo from './logo.svg';
import './App.css';
//@ts-ignore
import Wasm from "react-wasm";

function App() {
  return (
    <div className="App">
      <Wasm url="/wasm/cargo_bg.wasm">
        {(info: any) => {
          if (info.loading) return "Loading...";
          if (info.error) return "An error has occurred";

          const { module, instance } = info.data;
          console.log(instance.exports.fib(15))
          return <div>1 + 2 = {instance.exports.add(1, 2)}</div>;
        }}
      </Wasm>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
