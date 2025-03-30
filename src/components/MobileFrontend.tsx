import React from "react";
import Buttons from "./buttons";
import MobileScreen from "./MobileScreen";
import FinanceCard from "./FinanceCard";
import InvoiceCard from "./InvoiceCard";
import Layout from "./Layout";

function MobileFrontend({ className }: { className: string }) {
  return (
    <div className={`${className} flex flex-col gap-20`}>
      <div className="h-[32rem] overflow-hidden relative max-w-4xl mx-auto w-full">
        <div className="absolute -right-30 top-50 md:top-10 md:right-10">
          <MobileScreen />
        </div>
        <FinanceCard className=" absolute top-10 left-0 z-10 md:left-10" />
        <InvoiceCard className="absolute top-70 right-10 md:left-20" />
      </div>
      <Layout>
        <div className="flex flex-col gap-6 w-fit max-w-xl">
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
      </Layout>
    </div>
  );
}

export default MobileFrontend;
