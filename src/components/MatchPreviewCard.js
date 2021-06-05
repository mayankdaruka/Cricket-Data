import styled from "styled-components";

const MatchCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 17em;
  width: 26em;
  margin: 10px;
  border-radius: 0.5em;
  background: rgb(235, 235, 235);
`;

const MatchTitle = styled.div`
  flex: 1;
  background-color: tomato;
`;

const MatchSubTitle = styled.div`
  flex: 1;
  background-color: aqua;
`;

const MatchDate = styled.div`
  flex: 1;
  background-color: brown;
`;

const MatchResult = styled.div`
  flex: 1;
`;

export default function MatchPreviewCard({ matchDetails }) {
  return (
    <MatchCard>
      <MatchTitle> {matchDetails.match_title} </MatchTitle>
      <MatchSubTitle> {matchDetails.match_subtitle} </MatchSubTitle>
      <MatchDate> {new Date(matchDetails.date).toString()} </MatchDate>
      <MatchResult> {matchDetails.result} </MatchResult>
    </MatchCard>
  );
}
