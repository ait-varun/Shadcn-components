import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
  description: "...",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="">{children}</div>;
}
