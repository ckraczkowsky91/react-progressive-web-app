import React, {
  useState,
  useEffect
} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch('https://orangevalleycaa.org/api/videos')
        .then(response => response.json());
      setData(result);
    };
    fetchData();
  }, []);

  // We are using a JSX expression to create a list of divs
  // each div needs a unique 'key' prop otherwise the browser issues a warning
  return (
    <div className="App">
      <header>
        <h1>Art Videos</h1>
      </header>
      {data.map(video => (
        <div key={video.id}>
          <h2>{video.name}</h2>
          <video height={200} controls src={video.video_url}/>
        </div>
      )
      )}
    </div>
  );
}

export default App;
