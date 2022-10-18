import React from 'react';
import axios from 'axios';
import SampleCard from './components/Card';
import { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState({ hits: [] });
  console.log('We got the API!', data.id)
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.sampleapis.com/futurama/characters',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
      <SampleCard
      key={data.id}
        />
  );
}

export default App;
