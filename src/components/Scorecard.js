import styled from "styled-components";
import ScoreAttributes from "./ScoreAttributes";
import PlayerStats from "./PlayerStats";

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  background-color: aliceblue;
  border-radius: 6px;
  /* align-items: center;
  justify-content: center; */
`;

const InningsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: bisque;
  font-family: ${(props) => props.theme.font};
  font-weight: 800;
  height: 60px;
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
      <ScoreAttributes battingOrBowling="BATTING"></ScoreAttributes>
      {inning.batsmen.map((playerDetails) => (
        <PlayerStats playerDetails={playerDetails} />
      ))}
    </ScoreContainer>
  );
}
