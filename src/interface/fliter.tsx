// If FILTERS is defined like this:
export const FILTERS = [
  { key: "All", label: "All", matchType: null },
  { key: "Result", label: "Result", matchType: "finished" },
  { key: "Live", label: "Live", matchType: "inprogress" },
  { key: "Upcoming", label: "Upcoming", matchType: "notstarted" },
] as const;

export type FilterType = (typeof FILTERS)[number]["key"];

export interface Props {
  activeFilter: FilterType;
  filters: typeof FILTERS; // ✅ now matches the array of objects
  countMatches: Record<FilterType, number>;
  onFilter: (filter: FilterType) => void;
}
