import styled from "styled-components";

const TeamType = styled.div`
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

export default function ScoreAttributes({ battingOrBowling }) {
  return (
    <TeamType>
      <div style={{ flex: 6, marginLeft: "10px" }}>{battingOrBowling}</div>
      {["R", "B", "4s", "6s", "SR"].map((stat) => (
        <div style={{ flex: 1 }}> {stat} </div>
      ))}
    </TeamType>
  );
}
