import React, { useState } from 'react';
import Gateway from './components/Gateway';
import './App.css';

function App() {
  const [endpoint, setEndpoint] = useState(null);

  function handleChange(event) {
    setEndpoint(event.target.value);
  }

  return (
    <div className='App'>
      <form>
        <label >
          <label className='form-label' >
            Select a Service:
          </label>
          <select className='selector' value={endpoint} onChange={handleChange}>
            <option value="https://jsonplaceholder.typicode.com/todos">Todo list</option>
            <option value="https://jsonplaceholder.typicode.com/photos">Pictures Titles List</option>
            <option value="https://jsonplaceholder.typicode.com/posts">Post Titles List</option>
          </select>
        </label>
      </form>
      {endpoint && <Gateway endpoint={endpoint} />}
    </div>
  );
}

export default App;
