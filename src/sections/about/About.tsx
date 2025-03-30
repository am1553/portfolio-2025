import DesktopBackend from "../../components/DesktopBackend";
import DesktopFrontend from "../../components/DesktopFrontend";

import Layout from "../../components/Layout";
import MobileBackend from "../../components/MobileBackend";
import MobileFrontend from "../../components/MobileFrontend";

function About() {
  return (
    <section
      className="relative w-full before:absolute before:inset-0 before:-z-10"
      id="about"
    >
      <Layout className="flex flex-col gap-80">
        <DesktopFrontend className="max-xl:hidden" />
        <DesktopBackend className="max-xl:hidden" />
      </Layout>
      <div className="flex flex-col gap-40">
        <MobileFrontend className="xl:hidden md:justify-end" />
        <MobileBackend className="xl:hidden" />
      </div>
    </section>
  );
}

export default About;
