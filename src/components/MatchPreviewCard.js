import styled, { ThemeProvider } from "styled-components";

const MatchCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 17em;
  width: 26em;
  margin: 10px;
  border-radius: 0.5em;
  background: rgb(235, 235, 235);
  font-family: ${(props) => props.theme.font};
`;

const MatchTitle = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: bottom;
  flex: 1;
  font-weight: 800;
  padding: 10px;
  font-size: 20px;
`;

const MatchSubTitle = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  font-weight: 700;
  justify-content: center;
  font-size: 18px;
`;

const MatchDate = styled.div`
  flex: 2;
  /* background-color: brown; */
  font-weight: 600;
  justify-content: center;
  font-size: 18px;
  vertical-align: middle;
`;

const MatchResult = styled.div`
  flex: 2;
`;

export default function MatchPreviewCard({ matchDetails }) {
  const matchDate = new Date(matchDetails.date);
  const month = matchDate.toLocaleString("default", { month: "long" });

  // Figure out what to do for West Indies
  const countryCodeMap = {
    England: "GB",
    "New Zealand": "NZ",
    India: "IN",
    "South Africa": "ZA",
    Australia: "AU",
    Pakistan: "PK",
    Ireland: "IE",
    Bangladesh: "BD",
    "Sri Lanka": "LK",
    Afghanistan: "AF",
    Netherlands: "NL",
    Zimbabwe: "ZW",
  };

  return (
    <ThemeProvider theme={{ font: "Dosis" }}>
      <MatchCard>
        <MatchTitle> {matchDetails.match_title} </MatchTitle>
        <MatchSubTitle> {matchDetails.match_subtitle} </MatchSubTitle>
        <MatchDate>
          {month} {matchDate.getUTCDate()} {matchDate.getFullYear()}
        </MatchDate>
        <MatchResult> {matchDetails.result} </MatchResult>
      </MatchCard>
    </ThemeProvider>
  );
}
