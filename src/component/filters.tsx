"use client";

import { FILTERS, FilterType, Props } from "@/interface/fliter";
import styled from "styled-components";

const FilterWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FilterButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.background};
  color: ${({ active, theme }) =>
    active ? theme.colors.background : theme.colors.text};
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

export default function MatchFilter({
  activeFilter,
  filters,
  countMatches,
  onFilter,
}: Props) {
  return (
    <FilterWrapper>
      {filters.map((filter: (typeof FILTERS)[number]) => (
        <FilterButton
          key={filter.key}
          active={activeFilter === filter.key.toString()}
          onClick={() => onFilter(filter.key)}
        >
          {filter.label} <span>({countMatches[filter.key]})</span>
        </FilterButton>
      ))}
    </FilterWrapper>
  );
}
