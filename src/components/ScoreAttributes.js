import styled from "styled-components";
import Divider from "@material-ui/core/Divider";

const TeamType = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${(props) => props.theme.font};
  font-weight: 1000;
  height: 40px;
  vertical-align: middle;
  flex-wrap: nowrap;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgb(160, 160, 160);
  background-color: rgb(240, 240, 240);
`;

export default function ScoreAttributes({ batting }) {
  const stats = batting
    ? ["R", "B", "4s", "6s", "SR"]
    : ["O", "M", "R", "W", "ECON", "WD", "NB"];
  return (
    <div>
      <TeamType>
        <div style={{ flex: batting ? 6 : 4, marginLeft: "10px" }}>
          {batting ? "BATTING" : "BOWLING"}
        </div>
        {stats.map((stat) => (
          <div style={{ flex: 1 }}> {stat} </div>
        ))}
      </TeamType>
      {/* <Divider variant="middle" style={{}} /> */}
    </div>
  );
}
