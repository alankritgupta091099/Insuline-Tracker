import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Result from './components/result';
import AppNav from './components/AppNavbar';
import Enter  from  './components/enter';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppNav/>
      <Enter/>
      {/* <Result/> */}
    </div>
  );
}

export default App;
