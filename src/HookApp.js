import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
const App = () => {
  const [doggos, setdoggos] = useState([]);
  const [doggoText, setdoggoText] = useState("");
  const [url, setUrl] = useState("https://dog.ceo/api/breed/husky/images");

  useEffect(() => {
    axios.get(url).then(res => {
      //res.data.message
      setdoggos(res.data.message);
    });
  }, [url]);

  const handleChanges = e => {
    setdoggoText(e.target.value);
  };

  const fetchDoggos = () => {
    setUrl(`https://dog.ceo/api/breed/${doggoText}/images`);
  };

  return (
    <div className="App">
      <h1>Hello Doggos</h1>
      <input type="text" value={doggoText} onChange={handleChanges} />

      <button onClick={fetchDoggos}> Fetch doggos</button>
      <div className="doggos">
        {doggos.map(doggo => {
          return <img width="200" src={doggo} key={doggo} alt={doggo} />;
        })}
      </div>
    </div>
  );
};

export default App;
