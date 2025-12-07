import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Bank | Youth Friendly Resource Center, UNN",
  description: "Recent donors, student beneficiaries, and food distribution events at the Youth Friendly Food Bank.",
};

export default function FoodBankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

