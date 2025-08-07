"use client";

import { Match } from "@/interface/match";
import styled from "styled-components";
import { StatusBar } from "./status";
import { format } from "date-fns";

const Card = styled.div`
  background: #0c0c2c;
  color: white;
  width: 320px;
  border-radius: 16px;
  padding: 20px;
  font-family: "Arial", sans-serif;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  position: relative;
`;

const Stadium = styled.div`
  font-size: 12px;
  text-align: center;
  opacity: 0.6;
`;

interface LiveProps {
  status: string;
}

const Live = styled.span<LiveProps>`
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${({ status }) =>
    status === "FT"
      ? "#999"
      : status === "HT"
      ? "#ffcc00"
      : status === "Cancelled"
      ? "#666"
      : status === "-"
      ? "transparent"
      : "red"};
  color: ${({ status }) =>
    status === "-" || status === "Cancelled" ? "#fff" : "#fff"};
  display: ${({ status }) => (status === "-" ? "none" : "inline-block")};
`;

const ScoreRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: bold;
  margin: 14px 0;
`;

const TeamRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin: 14px 0;
  text-align: center;
`;

const Quarter = styled.div`
  text-align: center;
  font-size: 14px;
  color: yellow;
  font-weight: bold;
  margin-top: 15px;
`;

const DownInfo = styled.div`
  text-align: center;
  font-size: 14px;
  color: orange;
  margin-bottom: 15px;
`;

const LabelsRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  opacity: 0.7;
  margin-top: 8px;
  & span {
    color: #fff;
  }
`;

const MatchTime = styled.div`
  font-size: 0.85rem;
  color: #fff;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export default function MatchCard({ match }: { match: Match }) {
  function getOrdinal(n: number): string {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  const dateTimeFormatter = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const formatted = format(date, "eeee, MMM d • h:mm a");
    return formatted;
  };

  return (
    <Card>
      <Stadium>{match.country}</Stadium>
      <Live status={match.liveStatus}>
        {match.liveStatus === "FT"
          ? "Full Time"
          : match.liveStatus === "HT"
          ? "Half Time"
          : match.liveStatus === "Cancelled"
          ? "Cancelled"
          : match.liveStatus === "-"
          ? ""
          : `${match.liveStatus}'`}
      </Live>
      <Quarter>{match.competition}</Quarter>

      {match.liveStatus === "-" ? (
        <>
          <TeamRow>
            {match.homeTeam.name} <span style={{ margin: "0 12px" }}>-</span>{" "}
            {match.awayTeam.name}
          </TeamRow>
          <DownInfo>
            {match.round && getOrdinal(match.round.round)} Round
          </DownInfo>
          <MatchTime>{dateTimeFormatter(match.timestamp)}</MatchTime>
        </>
      ) : (
        <>
          <ScoreRow>
            {match.homeScore.current}{" "}
            <span style={{ margin: "0 12px" }}>-</span>{" "}
            {match.awayScore.current}
          </ScoreRow>
          <DownInfo>
            {match.round && getOrdinal(match.round.round)} Round
          </DownInfo>
          <LabelsRow>
            <span>{match.homeTeam.name}</span>
            <span>{match.awayTeam.name}</span>
          </LabelsRow>
          <StatusBar $liveStatus={match.liveStatus} />
        </>
      )}
    </Card>
  );
}
