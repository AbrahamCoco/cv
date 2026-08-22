import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corriculum VITAE",
  description: "Currículum vitae de Abraham Cocoletzi Zempoalteca",
  icons: {
    icon: "/cool.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
