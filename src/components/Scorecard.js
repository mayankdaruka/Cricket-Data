import styled from "styled-components";
import ScoreAttributes from "./ScoreAttributes";
import PlayerStats from "./PlayerStats";
import { Score } from "@material-ui/icons";

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  background-color: rgb(250, 250, 250);
  /* border-radius: 10px; */
  margin: 20px;
  box-shadow: 0 0 6px rgb(195, 195, 195);
  border-radius: 8px;
  /* align-items: center;
  justify-content: center; */
`;

const InningsTitle = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin-left: 10px;
  /* background-color: ${(props) => props.theme.color3}; */
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.color};
  font-weight: 800;
  height: 60px;
  font-size: 25px;
  border-radius: 8px 8px 0px 0px;
`;

const TeamType = styled.div`
  display: flex;
  font-family: ${(props) => props.theme.font};
  font-weight: 800;
  height: 40px;
  vertical-align: middle;
  align-items: center;
`;

const FallOfWickets = styled.div`
  /* height: 100px; */
  margin: 10px;
`;

const TotalScoreDetails = styled.div`
  font-size: 24px;
  font-weight: 800;
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: rgb(240, 240, 240);
`;

export default function Scorecard({ inning }) {
  return (
    <ScoreContainer>
      <InningsTitle>{inning.name.toUpperCase()}</InningsTitle>
      {/* <TeamType> BATTING </TeamType> */}
      <ScoreAttributes batting={true}></ScoreAttributes>
      {inning.batsmen.map((playerDetails) => (
        <PlayerStats playerDetails={playerDetails} />
      ))}
      <TotalScoreDetails>
        <div style={{ flex: 3 }}>TOTAL</div>
        <div style={{ flex: 3 }}>
          ({inning.over} ov, RR: {inning.runRate})
        </div>
        <div style={{ flex: 5 }}>{inning.run} Runs</div>
      </TotalScoreDetails>
      <FallOfWickets>
        <span style={{ fontWeight: 800 }}>Fall of Wickets:</span>
        {inning.batsmen.map(
          (playerDetails) =>
            playerDetails.fallOfWicket && (
              <span style={{ fontWeight: 500, fontSize: "17px" }}>
                {" "}
                {playerDetails.fallOfWicket} ({playerDetails.name},{" "}
                {playerDetails.fallOfWicketOver}
                {" ov"})
              </span>
            )
        )}
      </FallOfWickets>
      <ScoreAttributes batting={false}></ScoreAttributes>
      {inning.bowlers.map((playerDetails) => (
        <PlayerStats playerDetails={playerDetails} />
      ))}
    </ScoreContainer>
  );
}
