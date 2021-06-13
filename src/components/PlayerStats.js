import styled from "styled-components";

const PlayerRow = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${(props) => props.theme.font};
  font-weight: 800;
  height: 40px;
  vertical-align: middle;
  flex-wrap: nowrap;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
`;

export default function PlayerStats({ playerDetails }) {
  return (
    <PlayerRow>
      <div style={{ flex: 3, marginLeft: "10px" }}>{playerDetails.name}</div>
      <div style={{ flex: 3 }}>{playerDetails.howOut}</div>
      {[
        playerDetails.runs,
        playerDetails.balls,
        playerDetails.fours,
        playerDetails.sixes,
        playerDetails.strikeRate,
      ].map((stat) => (
        <div style={{ flex: 1 }}> {stat} </div>
      ))}
    </PlayerRow>
  );
}
