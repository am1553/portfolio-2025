import MobileScreen from "./MobileScreen";
import FinanceCard from "./FinanceCard";
import InvoiceCard from "./InvoiceCard";
import Buttons from "./buttons";

function DesktopFrontend({ className }: { className: string }) {
  return (
    <div
      className={`grid grid-cols-[60%_40%] items-center gap-x-10 ${className}`}
    >
      <div className="relative h-[500px] overflow-hidden rounded-xl px-4">
        <div className="absolute top-32">
          <MobileScreen />
          <FinanceCard className="absolute bottom-4/5 left-42 z-10" />
        </div>
        <InvoiceCard className="right-0 bottom-10" />
      </div>

      <div className="flex flex-col gap-6 w-fit">
        <span className="text-title-small uppercase text-primary">
          frontend development
        </span>
        <span className="text-title-large">
          Building Scalable & Performant Frontend Experiences with React
        </span>
        <p className="text-body-large opacity-60">
          After building multiple data-intensive platform for clients, I’ve
          honed my ability to craft high-performance solutions with a strong
          focus on optimisation. I ensure that feature releases provide a
          seamless and efficient user experience. My strength lies in
          approaching design from a bird’s-eye view, allowing me to abstract
          reusable components and logic for scalable development.
        </p>
        <Buttons.ViewProjectsBtn className="" />
      </div>
    </div>
  );
}

export default DesktopFrontend;
