"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { Match } from "@/interface/match";
import { Props } from "@/interface/fliter";

const FilterWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FilterButton = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.background};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.background : theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text}50;
  cursor: pointer;

  span {
    font-weight: bold;
    margin-left: 0.25rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}30;
  }
`;

const FILTERS = ["All", "Result", "Live", "Upcoming"] as const;
type FilterType = (typeof FILTERS)[number];

export default function MatchFilter({ matches, onFilter }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const countMatches = {
    All: matches.length,
    Result: matches.filter((m) => m.status.type === "finished").length,
    Live: matches.filter((m) => m.status.type === "inprogress").length,
    Upcoming: matches.filter((m) => m.status.type === "notstarted").length,
  };

  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);

    let filteredMatches: Match[] = [];

    switch (filter) {
      case "Result":
        filteredMatches = matches.filter((m) => m.status.type === "finished");
        break;
      case "Live":
        filteredMatches = matches.filter((m) => m.status.type === "inprogress");
        break;
      case "Upcoming":
        filteredMatches = matches.filter((m) => m.status.type === "notstarted");
        break;
      default:
        filteredMatches = matches;
    }
    onFilter(filteredMatches);
  };

  // Run default filter once on mount
  useEffect(() => {
    handleFilterClick("All");
  }, []);

  return (
    <FilterWrapper>
      {FILTERS.map((filter) => (
        <FilterButton
          key={filter}
          $active={activeFilter === filter}
          onClick={() => handleFilterClick(filter)}
        >
          {filter} <span>({countMatches[filter]})</span>
        </FilterButton>
      ))}
    </FilterWrapper>
  );
}
