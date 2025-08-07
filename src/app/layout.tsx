import ClientProviders from "@/providers/ClientProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Coding Exam",
  description: "Live scoring website with integration of third party.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
