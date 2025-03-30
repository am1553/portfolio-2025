import Layout from "./Layout";
import Buttons from "./buttons";
import CreateNoteCodeBlock from "./CreateNoteCodeBlock";
import SettingsIcon from "@mui/icons-material/Settings";
import Database from "./Database";
function MobileBackend({ className }: { className: string }) {
  return (
    <div className={`${className} flex flex-col gap-20`}>
      <div className="h-[32rem] overflow-hidden relative max-w-4xl mx-auto w-full">
        <div className="absolute -bottom-50 -left-30 md:left-0">
          <CreateNoteCodeBlock />
        </div>

        <SettingsIcon
          className="absolute top-20 right-20 -z-10 opacity-5 settings-animate"
          style={{ fontSize: "340px" }}
        />
        <div className="absolute top-10 left-30">
          <Database />
        </div>
      </div>
      <Layout>
        <div className="flex flex-col gap-6 w-fit max-w-xl md:ml-auto">
          <span className="text-title-small uppercase text-primary">
            backend development
          </span>
          <span className="text-title-large">
            Enhancing Applications with Secure & Performant Backend Services
          </span>
          <p className="text-body-large opacity-60">
            Having deployed multiple full-stack applications, I have experience
            designing SQL databases for efficiency and developing secure RESTful
            APIs with validation. I focus on ensuring data integrity,
            implementing authentication flows, and optimizing queries for better
            performance, while continuously improving my backend development
            skills.
          </p>
          <Buttons.ViewProjectsBtn className="" />
        </div>
      </Layout>
    </div>
  );
}

export default MobileBackend;
