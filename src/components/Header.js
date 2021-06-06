import styled from "styled-components";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import MatchPreviewCard from "./MatchPreviewCard";
import ScrollMenu from "react-horizontal-scrolling-menu";

const HeaderButton = styled(Button)`
  font-family: ${(props) => props.theme.font};
  margin-left: 30px;
  font-weight: 600;
`;

const HeaderToolbar = styled(Toolbar)`
  background-color: ${(props) => props.theme.color};
  /* display: flex;
  flex-direction: column; */
  display: grid;
  grid-template-rows: 3em 18em;
`;

const ScrollContainer = styled.div`
  /* margin-top: 10px; */
  width: 50%;
`;

const MatchCardsWrapper = styled.div`
  display: flex;
  align-content: flex-start; // How to align all lines when there is extra space in container
  /* justify-content: space-around; // How to align items on individual line */
  flex-direction: row; // Specify direction that the flex items are displayed in
  flex-wrap: wrap;
  margin-top: 42px;
`;

export default function Header() {
  const fixtures = useSelector((state) => state?.matches ?? {});
  const routingData = [
    {
      label: "All Matches",
      href: "/allMatches",
    },
    {
      label: "Live Matches",
      href: "/liveMatches",
    },
    {
      label: "Past Matches",
      href: "/pastMatches",
    },
    {
      label: "Upcoming Fixtures",
      href: "/upcomingFixtures",
    },
  ];
  return (
    <AppBar>
      <HeaderToolbar>
        <div>
          Cricket Data
          {routingData.map(({ label, href }) => (
            <HeaderButton
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink, // Should not use <Link> outside of <Router>
              }}
            >
              {label}
            </HeaderButton>
          ))}
        </div>

        <div style={{ color: "black" }}>
          <ScrollContainer>
            <ScrollMenu
              data={Object.values(fixtures).map((fixture) => (
                <MatchPreviewCard matchDetails={fixture} />
              ))}
            />
          </ScrollContainer>
        </div>
      </HeaderToolbar>
    </AppBar>
  );
}
