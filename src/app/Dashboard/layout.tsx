import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "...",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="">{children}</div>;
}
