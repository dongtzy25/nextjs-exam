"use client";

import styled from "styled-components";
import { useTheme } from "@/contexts/ThemeContext";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text}20;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}20;
  }
`;

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <NavbarWrapper>
      <Title>Home</Title>
      <ToggleButton onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </ToggleButton>
    </NavbarWrapper>
  );
}
