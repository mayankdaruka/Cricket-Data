import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { token } from "./token";
import axios from "axios";
import styled from "styled-components";
import MatchPreviewCard from "./components/MatchPreviewCard";
import Header from "./components/Header";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { matchFixtures } from "./fixturesExampleData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const MatchCardsWrapper = styled.div`
  display: flex;
  align-content: flex-start; // How to align all lines when there is extra space in container
  /* justify-content: space-around; // How to align items on individual line */
  flex-direction: row; // Specify direction that the flex items are displayed in
  flex-wrap: wrap;
`;

const ScrollContainer = styled.div`
  background-color: #f1c9ff;
  margin-top: 42px;
`;

const ScreenHeader = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: 600;
  padding-top: 13px;
  padding-left: 13px;
  padding-bottom: 5px;
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
    //     setFixtures(res.data.matchList.matches);
    //     setIsLoaded(true);
    //   })
    //   .catch((err) => console.error(err));
    setFixtures(matchFixtures);
  }, []);
  return (
    <div>
      {/* <ScreenHeader> Upcoming Fixtures </ScreenHeader> */}
      <Header />
      <ScrollContainer>
        <ScrollMenu
          data={fixtures.map((fixture) => (
            <MatchPreviewCard matchDetails={fixture} />
          ))}
          // arrowLeft={<ArrowBackIosIcon />}
          // arrowRight={<ArrowForwardIosIcon />}
        />
      </ScrollContainer>
      {/* <MatchCardsWrapper>
        {fixtures.map((fixture) => (
          <MatchPreviewCard matchDetails={fixture}> hello </MatchPreviewCard>
        ))}
      </MatchCardsWrapper> */}
    </div>
  );
}

export default App;
