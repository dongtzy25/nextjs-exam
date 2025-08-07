"use client";

import { ReactNode } from "react";

import { ThemeContextProvider } from "@/contexts/ThemeContext";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
