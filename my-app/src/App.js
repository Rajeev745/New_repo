import './App.css';

import React,{useState} from 'react';
import Table from './Component/Table';

function App() {
  const [search, setsearch] = useState("");
  return (
    <div className="App">
      
      <Table/>
    </div>
  );
}

export default App;
