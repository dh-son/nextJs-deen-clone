"use client";
import { PortfolioCard } from "./PortfolioCard";
import { Portfolio } from "@/types";

type Props = {
  portfolioList: Portfolio[];
};

export function PortfolioList({ portfolioList }: Props) {
  return (
    <div className="w-full">
      <div>
        {portfolioList.map((portfolio, idx) => {
          return (
            <div key={idx} className="py-4">
              <PortfolioCard portfolio={portfolio} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
