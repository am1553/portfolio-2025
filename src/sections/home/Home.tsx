import HeroImage from "../../assets/hero.png";
import Buttons from "../../components/buttons";
function Home() {
  return (
    <section className="text-center flex flex-col gap-20 z-10 relative max-md:px-6 max-2xl:px-10 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:text-left max-w-7xl w-full mx-auto lg:items-center">
      <img
        src={HeroImage}
        alt=""
        className="max-w-2xl w-full mx-auto lg:col-start-2 lg:row-start-1"
      />
      <div className="flex flex-col gap-6 lg:grid-start-1 lg:grid-rows-1">
        <h1 className="text-display-small md:text-display-medium lg:text-display-large">
          Transforming designs into scalable solutions
        </h1>
        <p className="text-body-large opacity-60">
          With expertise in frontend development, I build scalable and robust
          applications, integrating UI/UX principles to deliver an optimal user
          experience and drive engagement.
        </p>
        <Buttons.LinkedInBtn className={"max-lg:mx-auto"} />
      </div>
    </section>
  );
}

export default Home;
