import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [movie, setMovie] = useState("Un film");
  const [data, setData] = useState([]);
  const [name, setName] = useState("son réalisateur");

  function handleChangeMovie(e) {
    setMovie(e.target.value);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  const getData = async () => {
    const data = await fetch("http://localhost:5000/movies");
    const json = await data.json();
    setData(json.reponse);
  };

  const handleClick = async () => {
    await fetch(`http://localhost:5000/addMovie`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: movie, realisator: name }),
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  });

  return (
    <div>
      <div className="Header">
        <h1>Kub_or</h1>
      </div>
      <div className="body">
        <p>Ajouter un film</p>
        <input
          type="text"
          name="movieInput"
          value={name}
          onClick={() => {
            setName("");
          }}
          onChange={handleChangeName}
        />
        <input
          type="text"
          name="nameInput"
          value={movie}
          onClick={() => {
            setMovie("");
          }}
          onChange={handleChangeMovie}
        />

        <button className="submit" onClick={handleClick}>
          Enregistrer
        </button>
        <div className="moviesTab">
          {data &&
            data.length > 0 &&
            data.map((item) => <p key={item.id}>{item.name}</p>)}
        </div>
      </div>
    </div>
  );
};

export default App;
