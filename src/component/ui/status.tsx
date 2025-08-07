import { StatusBarProps } from "@/interface/status";
import styled, { css } from "styled-components";

const getStatusStyles = ($liveStatus: string) => {
  if ($liveStatus === "FT") {
    return css`
      background-color: #bbb; // Full Time = gray bar
    `;
  }

  if ($liveStatus === "HT") {
    return css`
      background: linear-gradient(to right, #ffcc00 50%, transparent 50%);
    `;
  }

  if ($liveStatus === "-") {
    return css`
      background-color: lightgray; // Not started
    `;
  }

  if ($liveStatus === "Cancelled") {
    return css`
      background-color: red;
      opacity: 0.7;
    `;
  }

  const match = $liveStatus.match(/^(\d+)/);
  if (match) {
    const minute = parseInt(match[1]);
    const percent = Math.min((minute / 90) * 100, 100);
    return css`
      background: linear-gradient(
        to right,
        red ${percent}%,
        transparent ${percent}%
      );
    `;
  }

  return css`
    background-color: lightgray;
  `;
};

export const StatusBar = styled.div<StatusBarProps>`
  height: 5px;
  border-radius: 4px;
  margin-top: 10px;

  ${({ $liveStatus }) => getStatusStyles($liveStatus)}
`;
