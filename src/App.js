import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect } from 'react';

function App() {
  const getData = useCallback(async () => {
    let response =await fetch('https://paulcamper.de/api/inventory/search?center_lat=52.504043&center_lng=13.393236&page_size=24');
    let res = response.json();
    console.log(res.Data.length);
  },[]);
  useEffect(() => {
    getData();
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
       import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect } from 'react';

function App() {
  const getData = useCallback(async () => {
    let response =await fetch('https://paulcamper.de/api/inventory/search?center_lat=52.504043&center_lng=13.393236&page_size=24');
    let res = response.json();
    console.log(res.Data.length);
  },[]);
  useEffect(() => {
    getData();
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
