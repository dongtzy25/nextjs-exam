"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import MatchCard from "./ui/card";
import { styled } from "styled-components";
import MatchFilter from "./filters";
import { Match } from "@/interface/match";
import { FILTERS, FilterType } from "@/interface/fliter";

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
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  // Use memo so counts aren't recalculated on every render unnecessarily
  const countMatches = useMemo(() => {
    return FILTERS.reduce((acc, filter) => {
      acc[filter.key] =
        filter.matchType === null
          ? matches.length
          : matches.filter((m) => m.status.type === filter.matchType).length;
      return acc;
    }, {} as Record<FilterType, number>);
  }, [matches]);

  const handleFilterClick = useCallback(
    (filter: FilterType) => {
      setActiveFilter(filter);

      const selectedFilter = FILTERS.find((f) => f.key === filter);

      const filtered =
        selectedFilter?.matchType === null
          ? matches
          : matches.filter((m) => m.status.type === selectedFilter?.matchType);

      setFilteredMatches(filtered);
    },
    [matches] // deps needed inside the function
  );

  // Initialize on mount
  useEffect(() => {
    handleFilterClick("All");
  }, [handleFilterClick]);

  return (
    <div style={{ padding: "1rem" }}>
      <MatchFilter
        activeFilter={activeFilter} // "All", "Result", etc.
        filters={FILTERS}
        countMatches={countMatches}
        onFilter={handleFilterClick}
      />

      <CardGrid>
        {filteredMatches.length > 0 ? (
          filteredMatches.map((match) => (
            <CardWrapper key={match.id}>
              <MatchCard match={match} />
            </CardWrapper>
          ))
        ) : (
          <p style={{ color: "#888", textAlign: "center" }}>
            No matches found.
          </p>
        )}
      </CardGrid>
    </div>
  );
}
