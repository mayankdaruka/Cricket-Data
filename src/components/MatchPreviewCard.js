import styled, { ThemeProvider } from "styled-components";
import ImageIcon from "@material-ui/icons/Image";
import SportsCricketIcon from "@material-ui/icons/SportsCricket";

const MatchCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 16.1em;
  width: 25em;
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
  padding-top: 7px;
  padding-left: 7px;
  padding-right: 7px;
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

const MatchFlagsAndButton = styled.div`
  display: flex;
  flex-direction: row;
  flex: 3;
  /* background-color: aliceblue; */
`;

const MatchFlags = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const DetailsItem = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailsButton = styled.button`
  /* background-color: ${(props) => props.theme.color}; */
  background-color: white;
  height: 4em;
  width: 7em;
  border: 2px solid;
  border-color: ${(props) => props.theme.color};
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => props.theme.color};
    transition-duration: 0.4s;
  }
  &:active {
    transform: scale(0.93);
  }
`;

const ScoresContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const MatchScore = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  /* color: ${(props) => props.theme.color}; */
  font-size: 18px;
`;

const MatchOvers = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color};
  font-weight: 600;
  font-size: 15px;
`;

const MatchScoreDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MatchResult = styled.div`
  flex: 1;
  font-weight: 600;
  padding-left: 10px;
  padding-top: 5px;
  color: ${(props) => props.theme.color};
`;

const FlagNamesGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;
  /* flex-grow: 1; */
`;

const NoImageAvailable = styled.div`
  height: 44px;
  width: 64px;
  background-color: rgba(200, 200, 200);
  /* vertical-align: middle; */
`;

const MatchDateTime = styled.div`
  color: ${(props) => props.theme.color};
  padding-left: 4px;
`;

export default function MatchPreviewCard({ matchDetails }) {
  const matchDate = new Date(matchDetails.startDateTime);
  const month = matchDate.toLocaleString("default", { month: "long" });
  const hours = matchDate.getHours();
  const minutes = matchDate.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const time = `${hours % 12}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${amOrPm}`;

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
    "United States": "US",
    Afghanistan: "AF",
    Netherlands: "NL",
    Zimbabwe: "ZW",
  };

  return (
    <ThemeProvider theme={{ font: "Dosis", color: "#009954" }}>
      <MatchCard>
        <MatchTitle>
          {matchDetails.series.name.length > 95
            ? matchDetails.series.name.substring(0, 90) + "..."
            : matchDetails.series.name}
        </MatchTitle>
        <MatchSubTitle>
          {matchDetails.status + ", "}
          <MatchDateTime>
            {month} {matchDate.getUTCDate()} {matchDate.getFullYear() + ", "}
          </MatchDateTime>
          <MatchDateTime>{time}</MatchDateTime>
        </MatchSubTitle>
        <MatchFlagsAndButton>
          <MatchFlags>
            {[matchDetails.homeTeam, matchDetails.awayTeam].map((team) => (
              <FlagNamesGrid>
                <div style={{ justifySelf: "center" }}>
                  {countryCodeMap?.[team.name] ? (
                    <img
                      src={`https://www.countryflags.io/${
                        countryCodeMap[team.name]
                      }/shiny/64.png`}
                    />
                  ) : (
                    <NoImageAvailable>
                      <ImageIcon />
                    </NoImageAvailable>
                  )}
                </div>
                <div
                  style={{
                    textAlign: "left",
                    fontWeight: 600,
                  }}
                >
                  <div style={{ display: "inline-block", marginRight: "5px" }}>
                    {team.name}
                  </div>
                  {matchDetails.status === "LIVE" && team.isBatting && (
                    <div style={{ display: "inline-block" }}>
                      <SportsCricketIcon />
                    </div>
                  )}
                </div>
              </FlagNamesGrid>
            ))}
          </MatchFlags>
          {/* <DetailsItem>
            <DetailsButton>See Match Details</DetailsButton>
          </DetailsItem> */}
          {matchDetails.scores ? (
            <ScoresContainer>
              <MatchScoreDetails>
                <MatchScore>
                  {matchDetails.scores.homeScore ?? "Yet to Bat"}
                </MatchScore>
                <MatchOvers>
                  {matchDetails.scores.homeOvers ?? "Yet to Bat"}
                </MatchOvers>
              </MatchScoreDetails>
              <MatchScoreDetails>
                <MatchScore>
                  {matchDetails.scores.awayScore ?? "Yet to Bat"}
                </MatchScore>
                <MatchOvers>
                  {matchDetails.scores.awayOvers ?? "Yet to Bat"}
                </MatchOvers>
              </MatchScoreDetails>
            </ScoresContainer>
          ) : (
            <ScoresContainer>
              <MatchOvers>Yet to Bat</MatchOvers>
              <MatchOvers>Yet to Bat</MatchOvers>
            </ScoresContainer>
          )}
        </MatchFlagsAndButton>
        {matchDetails.matchSummaryText ? (
          <MatchResult>{matchDetails.matchSummaryText}</MatchResult>
        ) : (
          <MatchResult> Match starts at {time} </MatchResult>
        )}
      </MatchCard>
    </ThemeProvider>
  );
}
