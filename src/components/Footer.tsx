import Layout from "./Layout";
import ManagerOne from "../assets/manager-one.jpeg";
import QuoteIcon from "../assets/quote.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function Recommendation() {
  return (
    <div>
      <div className="px-4 pb-6 pt-14 rounded-xl relative z-10 max-w-sm bg-surface text-on-surface">
        <img src={QuoteIcon} alt="" className="absolute -top-10 left-0" />
        <p className="text-body-large">
          Aryan was a pleasure to work with, during his time in my team he
          helped create complex front-end drawing tools using Google Maps API
          and his inquisitive nature propelled him to solve complex problems and
          turn them into shipped products. I wish him all the best for the
          future.
        </p>
        <hr className="opacity-20 my-6" />

        <div className="flex gap-4">
          <img src={ManagerOne} alt="" className="h-10 w-10 rounded-full" />
          <div className="flex flex-col">
            <span className="text-title-medium">James Heffer</span>
            <span className="text-label-large">Product Manager</span>
            <span className="text-label-large">February 19, 2024</span>
            <span className="text-label-large">
              James managed Aryan directly
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative bg-dark-background  text-on-dark-background w-full py-40">
      <Layout>
        <div className="flex flex-col items-center gap-10">
          <Recommendation />
          <div className="flex flex-col gap-4">
            <span className="text-display-large opacity-60">Let's Connect</span>
            <div className="flex items-center justify-center gap-4">
              <button>
                <LinkedInIcon style={{ fontSize: "32px" }} />
              </button>
              <button>
                <GitHubIcon style={{ fontSize: "30px" }} />
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Footer;
