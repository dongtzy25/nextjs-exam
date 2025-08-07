import { Match } from "./match";

export type Props = {
  matches: Match[];
  onFilter: (filtered: Match[]) => void;
};
