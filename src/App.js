import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { token } from "./token";
import axios from "axios";
import styled from "styled-components";
import MatchPreviewCard from "./components/MatchPreviewCard";

const MatchCardsWrapper = styled.div`
  display: flex;
  /* align-items: stretch; */
  align-content: flex-start; // How to align all lines when there is extra space in container
  /* justify-content: space-around; // How to align items on individual line */
  flex-direction: row; // Specify direction that the flex items are displayed in
  flex-wrap: wrap;
  /* width: 10em; */
  /* height: 300px;
  background-color: rgb(200, 0, 0); */
`;

const ChildItem = styled.div`
  height: 20em;
  width: 20em;
  margin: 10px;
  background: tomato;
`;

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    // const options = {
    //   method: "GET",
    //   url: "https://cricket-live-data.p.rapidapi.com/fixtures-by-date/2021-06-05",
    //   headers: {
    //     "x-rapidapi-key": token,
    //     "x-rapidapi-host": "cricket-live-data.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then((res) => {
    //     // console.log(res);
    //     setIsLoaded(true);
    //     console.log(res.data);
    //     setFixtures(res.data);
    //   })
    //   .catch((err) => console.error(err));

    setFixtures([
      {
        id: 2529193,
        series_id: 834,
        venue: "Shere Bangla National Stadium, Mirpur",
        date: "2021-06-05T03:00:00+00:00",
        status: "Complete",
        result: "Starts at 09:00 local time",
        match_title:
          "Old DOHS Sports Club v Partex Sporting Club at Shere Bangla National Stadium, Mirpur, T20.",
        match_subtitle: "16th Match",
        home: {
          id: 144180,
          name: "Old DOHS Sports Club",
          code: "",
        },
        away: {
          id: 144183,
          name: "Partex Sporting Club",
          code: "",
        },
      },
      {
        id: 2529183,
        series_id: 834,
        venue: "Shere Bangla National Stadium, Mirpur",
        date: "2021-06-05T07:30:00+00:00",
        status: "Complete",
        result: "Starts at 13:30 local time",
        match_title:
          "Abahani Limited v Brothers Union at Shere Bangla National Stadium, Mirpur, T20.",
        match_subtitle: "17th Match",
        home: {
          id: 144177,
          name: "Abahani Limited",
          code: "",
        },
        away: {
          id: 144168,
          name: "Brothers Union",
          code: "",
        },
      },
      {
        id: 2498433,
        series_id: 792,
        venue: "Lord's, London",
        date: "2021-06-05T10:00:00+00:00",
        status: "Complete",
        result: "England trail by 267 runs. CRR: 2.58",
        match_title: "England v New Zealand at Lord's, London, Test.",
        match_subtitle: "1st Test - Day 4",
        home: {
          id: 270,
          name: "England",
          code: "ENG",
        },
        away: {
          id: 282,
          name: "New Zealand",
          code: "NZL",
        },
      },
      {
        id: 2529191,
        series_id: 834,
        venue: "Shere Bangla National Stadium, Mirpur (night)",
        date: "2021-06-05T12:00:00+00:00",
        status: "Complete",
        result: "Starts at 18:00 local time",
        match_title:
          "Mohammedan Sporting Club v Prime Bank Cricket Club at Shere Bangla National Stadium, Mirpur (night), T20.",
        match_subtitle: "18th Match",
        home: {
          id: 144162,
          name: "Mohammedan Sporting Club",
          code: "",
        },
        away: {
          id: 144159,
          name: "Prime Bank Cricket Club",
          code: "",
        },
      },
    ]);

    // fetch(`https://cricket.sportmonks.com/api/v2.0/scores?api_token=${token}`)
    //   .then((res) => res.json())
    //   .then((result) => console.log(result));
  }, []);
  return (
    <div>
      <MatchCardsWrapper>
        {fixtures.map((fixture) => (
          <MatchPreviewCard matchDetails={fixture}> hello </MatchPreviewCard>
        ))}
      </MatchCardsWrapper>
    </div>
  );
}

export default App;
