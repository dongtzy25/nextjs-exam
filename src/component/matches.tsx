"use client";

import { useState, useMemo, useEffect } from "react";
import MatchCard from "./ui/card";
import { styled } from "styled-components";
import MatchFilter from "./filters";
import { Match } from "@/interface/match";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Matches({ matches }: { matches: Match[] }) {
  const [filteredMatches, setFilteredMatches] = useState<Match[]>([]);
  useEffect(() => {
    setFilteredMatches(matches);
  }, []);
  return (
    <div style={{ padding: "1rem" }}>
      <MatchFilter matches={matches} onFilter={setFilteredMatches} />

      <CardGrid>
        {filteredMatches.map((match) => (
          <CardWrapper key={match.id}>
            <MatchCard match={match} />
          </CardWrapper>
        ))}
      </CardGrid>
    </div>
  );
}
