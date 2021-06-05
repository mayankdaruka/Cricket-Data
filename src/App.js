import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { token } from "./token";
import axios from "axios";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://cricket-live-data.p.rapidapi.com/fixtures-by-date/2021-06-05",
      headers: {
        "x-rapidapi-key": token,
        "x-rapidapi-host": "cricket-live-data.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        // console.log(res);
        setIsLoaded(true);
        console.log(res.data);
        setFixtures(res.data);
      })
      .catch((err) => console.error(err));

    // fetch(`https://cricket.sportmonks.com/api/v2.0/scores?api_token=${token}`)
    //   .then((res) => res.json())
    //   .then((result) => console.log(result));
  }, []);
  return <div> Hello </div>;
}

export default App;
