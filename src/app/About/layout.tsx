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
  return <div className="ps-4">{children}</div>;
}
