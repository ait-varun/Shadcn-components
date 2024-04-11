import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description: "...",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-screen">{children}</div>
  );
}
