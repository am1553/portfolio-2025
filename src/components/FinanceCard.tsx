import React, { useEffect, useState } from "react";
import BudgetSummary from "./BudgetSummary";
import PotsSummary from "./PotsSummary";

function FinanceCard({ className }: { className: string }) {
  const [showCard, setShowCard] = useState({
    id: "budget",
    children: <BudgetSummary />,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCard((prev) => {
        if (prev.id === "budget") {
          return { id: "pots", children: <PotsSummary /> };
        } else {
          return { id: "budget", children: <BudgetSummary /> };
        }
      });
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [showCard]);

  return (
    <div className={className}>
      <div className="w-fit h-fit">{showCard.children}</div>
    </div>
  );
}

export default FinanceCard;
