import React, { useState } from 'react';
import Gateway from './components/Gateway';

function App() {
  const [endpoint, setEndpoint] = useState(null);

  function handleChange(event) {
    setEndpoint(event.target.value);
  }

  return (
    <div>
      <form>
        <label>
          Select a Service:
          <select value={endpoint} onChange={handleChange}>
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
