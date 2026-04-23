// app/layout.tsx
import "./globals.css"; // Keep your styles here

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}