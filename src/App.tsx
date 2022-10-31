import { useState } from 'react';
import { Calendary, ForecastItem } from './components/Calendary';
import { Header } from './components/Header';
import api from './services/api';

function App() {
  const [cityName, setCityName] = useState('');
  const [results, setResults] = useState<ForecastItem[]>([]);

  const onChangeInput = (text: string) => {
    setCityName(text);
  };

  const search = async () => {
    const { data } = await api.get('', { params: { city_name: cityName } });
    setResults(data.results.forecast.slice(0, 7));
  };
  
  return (
    <>
      <Header 
        cityName={cityName}
        onChangeInput={onChangeInput}
        search={search}
      />
      <Calendary
        results={results}
      />
      
    </>
    
  );
}

export default App;
