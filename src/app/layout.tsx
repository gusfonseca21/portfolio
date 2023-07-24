import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gustavo Fonseca",
  description: "Desenvolvedor web freelancer",
  icons: {
    icon: "/src/components/icons/TagIcon.tsx",
    shortcut: "/src/components/icons/TagIcon.tsx",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html translate='no'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
