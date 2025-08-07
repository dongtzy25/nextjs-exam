"use client";

import Navbar from "@/component/navbar";
import { lazy, Suspense, useEffect, useState } from "react";
import { styled } from "styled-components";

const Matches = lazy(() => import("@/component/matches"));

const LoadingWrapper = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #888;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export default function Home() {
  const [allMatches, setAllMatches] = useState([]);

  useEffect(() => {
    const getMatches = async () => {
      const res = await fetch("/data/matches.json");
      const matches = await res.json();
      setAllMatches(matches);
    };
    getMatches();
  }, []);

  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingWrapper>Loading Matches...</LoadingWrapper>}>
        <Matches matches={allMatches} />
      </Suspense>
    </>
  );
}
