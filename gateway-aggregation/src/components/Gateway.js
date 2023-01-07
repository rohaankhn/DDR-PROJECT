import React, { useEffect, useState } from 'react';

function Gateway(props) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(props.endpoint);
      const data = await res.json();
      setResponse(data);
    }
    fetchData();
  }, [props.endpoint]);

  return (
    <div>
      {response && (
        <div>
            {response.map( (item) =>
                <div key={item.id} style={{color: 'aliceblue'}} >
                    <h1>{ item.id + ". " + item.title}</h1>
                    <p>{item.description}</p>
                </div>
            )}
          </div>
      )}
    </div>
  );
}

export default Gateway;
