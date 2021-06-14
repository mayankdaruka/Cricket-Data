import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

const PlayerRow = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${(props) => props.theme.font};
  font-weight: 500;
  height: 40px;
  vertical-align: middle;
  flex-wrap: nowrap;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const PlayerName = styled.div`
  flex: 3;
  margin-left: 10px;
  font-weight: 600;
  color: ${(props) => props.theme.color};
  font-size: 18px;
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
        {batsman && (
          <div style={{ flex: 3, fontSize: "18px" }}>
            {playerDetails.howOut.replaceAll(":", "")}
          </div>
        )}
        {details.map((stat) => (
          <div style={{ flex: 1, fontSize: "18px" }}> {stat} </div>
        ))}
        {/* </ListItem> */}
        {/* <Divider /> */}
      </PlayerRow>
      <Divider variant="middle" light />
    </div>
  );
}
