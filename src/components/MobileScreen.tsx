import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryIcon from "../assets/battery-icon.png";
import LockIcon from "../assets/lock.svg";
function MobileScreen() {
  return (
    <div
      className={`w-[280px] h-[590px] rounded-4xl outline-[10px] outline-[#000000] shadow-inner bg-[#F8F5F0] z-10 relative`}
    >
      <div className="h-3 w-30 bg-[#000000] shadow-md  absolute top-0 left-2/4 -translate-x-2/4 rounded-b-xl"></div>
      <div className="h-4 w-full flex items-center justify-between px-6 pt-2">
        <span className="text-[10px]">13:12</span>
        <div className="flex items-center gap-1">
          <SignalCellularAltIcon style={{ fontSize: "12px" }} />
          <WifiIcon style={{ fontSize: "12px" }} />
          <img src={BatteryIcon} alt="" />
        </div>
      </div>
      <div className="h-7 border-b border-gray-200 flex items-center justify-center gap-1">
        <img src={LockIcon} alt="" className="h-2" />
        <span className="text-xs">personal-finance.dev</span>
      </div>
      <div className="px-4 pt-8 flex flex-col gap-4">
        <span className="font-bold text-[24px]">Overview</span>

        <div className="flex flex-col bg-white px-4 py-6 rounded-md">
          <span className="text-[12px]">Current Balance</span>
          <span className="font-bold">$4836.00</span>
        </div>
        <div className="flex flex-col bg-white px-4 py-6 rounded-md income-card">
          <span className="text-[12px]">Income</span>
          <span className="font-bold">$3814.00</span>
        </div>

        <div className="flex flex-col bg-white px-4 py-6 rounded-md">
          <span className="text-[12px]">Expenses</span>
          <span className="font-bold">$1700.50</span>
        </div>
      </div>
    </div>
  );
}

export default MobileScreen;
