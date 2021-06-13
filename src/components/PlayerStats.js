import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

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

const PlayerName = styled.div`
  flex: 3;
  margin-left: 10px;
  color: ${(props) => props.theme.color};
`;

export default function PlayerStats({ playerDetails }) {
  const batsman = playerDetails.hasOwnProperty("runs");
  const details = batsman
    ? [
        playerDetails.runs,
        playerDetails.balls,
        playerDetails.fours,
        playerDetails.sixes,
        playerDetails.strikeRate,
      ]
    : [
        playerDetails.overs,
        playerDetails.maidens,
        playerDetails.runsConceded,
        playerDetails.wickets,
        playerDetails.economy,
        playerDetails.wides,
        playerDetails.noBalls,
      ];
  return (
    <div>
      <PlayerRow>
        {/* <ListItem> */}
        <PlayerName style={{ flex: batsman ? 3 : 4 }}>
          {playerDetails.name}
        </PlayerName>
        {batsman && <div style={{ flex: 3 }}>{playerDetails.howOut}</div>}
        {details.map((stat) => (
          <div style={{ flex: 1 }}> {stat} </div>
        ))}
        {/* </ListItem> */}
        {/* <Divider /> */}
      </PlayerRow>
      <Divider variant="middle" light />
    </div>
  );
}
