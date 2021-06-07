import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { token } from "./token";
import axios from "axios";
import styled from "styled-components";
import Header from "./components/Header";
import { matchFixtures } from "./fixturesExampleData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { addMatchesBatch } from "./actions/index";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from "@material-ui/styles";
import TabHeader from "./components/TabHeader";
import { scorecard } from "./scorecardExampleData";
import Scorecard from "./components/Scorecard";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const fixtures = useSelector((state) => state?.matches ?? {});
  const innings = scorecard.fullScorecard.innings;

  useEffect(() => {
    // const options = {
    //   method: "GET",
    //   url: "https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php",
    //   params: { upcomingLimit: "5", inprogresslimit: "5", completedlimit: "5" },
    //   headers: {
    //     "x-rapidapi-key": token,
    //     "x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
    //   },
    // };
    // axios
    //   .request(options)
    //   .then((res) => {
    //     dispatch(addMessagesBatch(res.data.matchList.matches));
    //     setIsLoaded(true);
    //   })
    //   .catch((err) => console.error(err));

    dispatch(addMatchesBatch(matchFixtures));
    // setFixtures(matchFixtures);
  }, []);
  return (
    <div>
      <Header />
      <TabHeader />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Scorecard inning={innings[0]} />
      </div>
      {/* <ScrollContainer>
        <ScrollMenu
          data={Object.values(fixtures).map((fixture) => (
            <MatchPreviewCard matchDetails={fixture} />
          ))}
          // arrowLeft={<ArrowBackIosIcon />}
          // arrowRight={<ArrowForwardIosIcon />}
        />
      </ScrollContainer> */}
      {/* <MatchCardsWrapper>
        {Object.values(fixtures).map((fixture) => (
          <MatchPreviewCard matchDetails={fixture} />
        ))}
      </MatchCardsWrapper> */}
    </div>
  );
}

export default App;
