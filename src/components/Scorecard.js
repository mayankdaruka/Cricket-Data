import styled from "styled-components";

const ScoreContainer = styled.div`
  display: flex;
`;

export default function Scorecard({ inning }) {
  return <ScoreContainer>{inning.name.toUpperCase()}</ScoreContainer>;
}
