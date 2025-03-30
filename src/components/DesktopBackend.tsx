import CreateNoteCodeBlock from "./CreateNoteCodeBlock";
import Database from "./Database";
import Buttons from "./buttons";
import SettingsIcon from "@mui/icons-material/Settings";
function DesktopBackend({ className }: { className: string }) {
  return (
    <div
      className={`grid grid-cols-[60%_40%] items-center gap-x-10 ${className}`}
    >
      <div className="relative">
        <CreateNoteCodeBlock />
        <SettingsIcon
          className="absolute top-20 right-20 -z-10 opacity-5 settings-animate"
          style={{ fontSize: "340px" }}
        />
        <div className="absolute bottom-0 right-0">
          <Database />
        </div>
      </div>
      <div className="flex flex-col gap-6 w-fit">
        <span className="text-title-small uppercase text-primary">
          backend development
        </span>
        <span className="text-title-large">
          Enhancing Applications with Secure & Performant Backend Services
        </span>
        <p className="text-body-large opacity-60">
          Having deployed multiple full-stack applications, I have experience
          designing SQL databases for efficiency and developing secure RESTful
          APIs with validation. I focus on ensuring data integrity, implementing
          authentication flows, and optimizing queries for better performance,
          while continuously improving my backend development skills.
        </p>
        <Buttons.ViewProjectsBtn className="" />
      </div>
    </div>
  );
}

export default DesktopBackend;
