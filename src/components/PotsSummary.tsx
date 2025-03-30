import PotIcon from "../assets/icon-pot.svg";
function PotsSummary() {
  return (
    <div className="w-sm h-full bg-white px-4 py-6 rounded-xl shadow-md grid grid-cols-2 grid-rows-[auto_1fr] gap-4 items-center pots-card finance-card">
      <div className="text-[14px] row-start-1 col-span-2 justify-center items-center h-fit">
        <span>Pots</span>
      </div>
      <div className="flex gap-4 bg-[#F8F4F0] p-4 rounded-md w-fit">
        <img src={PotIcon} alt="" />
        <div className="flex flex-col ">
          <span className="text-[12px]">Total Saved</span>
          <span className="text-[14px] font-bold">$850</span>
        </div>
      </div>
      <div className="col-start-2 row-start-2 grid grid-cols-2 grid-rows-2 gap-2">
        <div className="text-[10px] border-l-4 border-[#277C78]  py-2 pl-2 flex flex-col row-start-1 col-start-1">
          <div>Savings</div>
          <span>
            <span className="font-bold">$159</span>
          </span>
        </div>
        <div className="text-[10px] border-l-4 border-[#82C9D7]  py-2 pl-2 flex flex-col row-start-1 col-start-2">
          <div>Gift</div>
          <span>
            <span className="font-bold">$40</span>
          </span>
        </div>
        <div className="text-[10px] border-l-4 border-[#F2CDAC]  py-2 pl-2 flex flex-col row-start-2 col-start-1">
          <div className="">Concert Ticket</div>
          <span>
            <span className="font-bold">$40</span>
          </span>
        </div>
        <div className="text-[10px] border-l-4 border-[#626070]  py-2 pl-2 flex flex-col row-start-2 col-start-2">
          <div className=" ">New Laptop</div>
          <span>
            <span className="font-bold">$40</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PotsSummary;
