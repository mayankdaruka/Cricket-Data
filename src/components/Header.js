import styled from "styled-components";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useSelector, useStore } from "react-redux";
import MatchPreviewCard from "./MatchPreviewCard";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { useState } from "react";

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
  grid-template-rows: 3em 16.2em;
`;

const ScrollContainer = styled.div`
  /* margin-top: 10px; */
  width: 2000px;
  margin-left: -160px;
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
  const [localFilter, setLocalFilter] = useState("ALL");
  const filteredFixtures = Object.values(fixtures).filter(
    (fixture) => fixture.status === localFilter || localFilter === "ALL"
  );

  const matchFilters = [
    ["All Matches", "ALL"],
    ["Live Matches", "LIVE"],
    ["Past Matches", "COMPLETED"],
    ["Upcoming Fixtures", "UPCOMING"],
  ];

  return (
    <AppBar position="sticky">
      <HeaderToolbar>
        <div>
          {matchFilters.map(([label, status]) => (
            <HeaderButton
              {...{ color: "inherit" }}
              onClick={() => setLocalFilter(status)}
            >
              {label} (
              {status === "ALL"
                ? Object.keys(fixtures).length
                : Object.values(fixtures).filter(
                    (fixture) => fixture.status === status
                  ).length}
              )
            </HeaderButton>
          ))}
        </div>

        <div style={{ color: "black" }}>
          <ScrollContainer>
            <ScrollMenu
              data={filteredFixtures.map((fixture) => (
                <MatchPreviewCard matchDetails={fixture} />
              ))}
            />
          </ScrollContainer>
        </div>
      </HeaderToolbar>
    </AppBar>
  );
}
