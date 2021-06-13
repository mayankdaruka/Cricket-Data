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
  justify-content: center;
  background-color: ${(props) => props.theme.color3};
  font-family: ${(props) => props.theme.font};
  font-weight: 600;
  height: 60px;
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

export default function Scorecard({ inning }) {
  return (
    <ScoreContainer>
      <InningsTitle>{inning.name.toUpperCase()}</InningsTitle>
      {/* <TeamType> BATTING </TeamType> */}
      <ScoreAttributes batting={true}></ScoreAttributes>
      {inning.batsmen.map((playerDetails) => (
        <PlayerStats playerDetails={playerDetails} />
      ))}
      <ScoreAttributes batting={false}></ScoreAttributes>
      {inning.bowlers.map((playerDetails) => (
        <PlayerStats playerDetails={playerDetails} />
      ))}
    </ScoreContainer>
  );
}
