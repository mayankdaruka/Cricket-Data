import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SportsCricketIcon from "@material-ui/icons/SportsCricket";
import { Link as RouterLink } from "react-router-dom";

const HeaderButton = styled(Button)`
  font-family: ${(props) => props.theme.font};
  margin-left: 30px;
  font-weight: 600;
`;

const HeaderTabToolbar = styled(Toolbar)`
  background-color: ${(props) => props.theme.color2};
`;

const LogoTitle = styled.div`
  font-size: 30px;
  font-weight: 1000;
`;

export default function TabHeader() {
  const routingData = [
    {
      label: "Series",
      href: "/series",
    },
    {
      label: "Teams",
      href: "/teams",
    },
    {
      label: "Players",
      href: "/players",
    },
    {
      label: "Upcoming Fixtures",
      href: "/upcomingFixtures",
    },
  ];
  return (
    <AppBar position="sticky">
      <HeaderTabToolbar>
        <LogoTitle>Cricket Data</LogoTitle>
        <SportsCricketIcon />
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
      </HeaderTabToolbar>
    </AppBar>
  );
}
