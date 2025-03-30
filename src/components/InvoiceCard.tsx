import React, { useEffect, useState } from "react";

function InvoiceCard({ className }: { className: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [theme]);
  return (
    <div
      className={`max-w-xs ${
        theme === "light" ? "bg-white text-blac" : "bg-[#1E2139] text-white"
      } shadow-md flex flex-col rounded-xl px-4 py-6 w-xs text-[14px] gap-4 transition-colors absolute ${className} `}
    >
      <div className="flex justify-between ">
        <span className="font-bold">
          <span className="opacity-40"># </span>RT3080
        </span>
        <span className="text-gray-300">Jensen Huang</span>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-[12px]">Due 19 Aug 2021</span>
          <span className="font-bold">£1800.90</span>
        </div>
        <div className="bg-green-100 px-8 rounded-md flex items-center justify-between relative before:absolute before:bg-green-500 text-green-500 before:w-2 before:h-2 before:rounded-full before:left-4 before:top-2/4 before:-translate-y-2/4 font-bold">
          <span>Paid</span>
        </div>
      </div>
    </div>
  );
}

export default InvoiceCard;
