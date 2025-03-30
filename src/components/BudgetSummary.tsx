import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
function BudgetSummary() {
  useEffect(() => {
    ChartJS.overrides["doughnut"].plugins.legend.display = false;
  }, []);

  const datasets = [
    {
      label: "Budgets",
      data: [50.0, 750.0, 75.0, 100.0],
      backgroundColor: ["#277C78", "#82C9D7", "#F2CDAC", "#626070"],
      borderWidth: 0,
      cutout: "80%",
    },
  ];
  const datasetsInner = [
    {
      label: "Budgets",
      data: [50.0, 750.0, 75.0, 100.0],
      backgroundColor: ["#277C7890", "#82C9D790", "#F2CDAC90", "#62607090"],
      borderWidth: 0,
      cutout: "80%",
      radius: "85%",
      options: {
        plugins: {
          tooltip: false,
        },
      },
    },
  ];
  return (
    <div className="budget-card xl:w-md bg-white px-4 py-6 rounded-xl shadow-md grid grid-cols-[auto_1fr] gap-x-4 grid-rows-[auto_1fr] items-center finance-card">
      <div className="text-[14px] row-start-1 col-span-2 justify-center items-center h-fit">
        <span>Budgets</span>
      </div>
      <div className="relative w-28 h-28 xl:w-32 xl:h-32 col-start-1 row-start-2">
        <Doughnut
          data={{
            labels: ["Entertainment", "Bills", "Dining Out", "Personal Care"],
            datasets,
          }}
          width={2}
          className="relative z-10"
        />
        <Doughnut
          data={{
            labels: ["Entertainment", "Bills", "Dining Out", "Personal Care"],
            datasets: datasetsInner,
          }}
          width={2}
          className="absolute top-0 bottom-0 left-0 right-0"
        />
        <div className="flex flex-col absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center">
          <span className="font-bold text-[14px]">$338.55</span>
          <span className="text-grey-500 text-[10px]">of $975.34 limit</span>
        </div>
      </div>
      <div className="col-start-2 row-start-2 w-fit ">
        <span className="text-[12px] font-semibold">Spending Summary</span>
        <div className="text-[10px] py-2 flex items-center justify-between border-b border-[#00000010]">
          <div className="pl-2 border-l-4 border-[#277C78] ">Bills</div>
          <span>
            <span className="font-bold">$250.00</span> of $750.00
          </span>
        </div>
        <div className="text-[10px] py-2 flex items-center justify-between gap-10 border-b border-[#00000010]">
          <div className="pl-2 border-l-4 border-[#82C9D7] ">Dining Out</div>
          <span>
            <span className="font-bold">$67.00</span> of $75.00
          </span>
        </div>
        <div className="text-[10px] py-2 flex items-center justify-between gap-10 border-b border-[#00000010]">
          <div className="pl-2 border-l-4 border-[#F2CDAC] ">Personal Care</div>
          <span>
            <span className="font-bold">$65.00</span> of $100.00
          </span>
        </div>
        <div className="text-[10px] py-2 flex items-center justify-between gap-10 border-[#00000010]">
          <div className="pl-2 border-l-4 border-[#626070] ">Entertainment</div>
          <span>
            <span className="font-bold">$25.00</span> of $50.00
          </span>
        </div>
      </div>
    </div>
  );
}

export default BudgetSummary;
