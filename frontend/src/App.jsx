import { useEffect, useState } from 'react';
import client from './api/client';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    client.get('/')
      .then(res => setMessage(res.data.message))
      .catch(err => {
        console.error('Error calling backend:', err);
        setMessage('Failed to load message from backend');
      });
  }, []);

  return (
    <div>
      <h1>{message || "Loading..."}</h1>
    </div>
  );
}

export default App;
