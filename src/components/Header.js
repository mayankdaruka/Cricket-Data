import styled from "styled-components";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const HeaderButton = styled(Button)`
  font-family: ${(props) => props.theme.font};
  margin-left: 30px;
  font-weight: 600;
`;

const HeaderToolbar = styled(Toolbar)`
  background-color: ${(props) => props.theme.color};
`;

export default function Header() {
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
      </HeaderToolbar>
    </AppBar>
  );
}
