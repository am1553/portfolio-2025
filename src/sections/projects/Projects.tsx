import Layout from "../../components/Layout";
import NotesProjectImg from "../../assets/notes-app-project.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonalFinanceProjectImg from "../../assets/personal-finance.png";
import KanbanBoardProjectImg from "../../assets/kanban-board.png";
import InvoiceManagementProjectImg from "../../assets/invoices.png";
import AudiophileProject from "../../assets/audiophile.png";
import EntertainmentProject from "../../assets/entertainment.png";
import PhotosnapProject from "../../assets/photosnap.png";
const PROJECTS = [
  {
    title: "Notes",
    description:
      "A full stack notes application to enhance productivity and track progress.",
    img: NotesProjectImg,
    link: "",
    code: "",
  },
  {
    title: "Personal Finance",
    description:
      "A personal finance dashboard application to manage budget and transactions.",
    img: PersonalFinanceProjectImg,
    link: "",
    code: "",
  },
  {
    title: "Kanban Board",
    description: "A Full Stack productivity tool to manage and track tasks.",
    img: KanbanBoardProjectImg,
    link: "",
    code: "",
  },
  {
    title: "Invoice Management",
    description:
      "A CRUD web app to keep a record of invoices integrated with Google Firebase.",
    img: InvoiceManagementProjectImg,
    link: "",
    code: "",
  },
  {
    title: "Audiophile E-commerce",
    description:
      "A complete e-commerce CRUD web app made to be responsive across all devices.",
    img: AudiophileProject,
    link: "",
    code: "",
  },
  {
    title: "Entertainment",
    description:
      "A SPA for entertainment platform showcasing movies and shows.",
    img: EntertainmentProject,
    link: "",
    code: "",
  },
  {
    title: "PhotoSnap Art Gallery",
    description:
      "A landing page for art gallery with animations for better user experience.",
    img: PhotosnapProject,
    link: "",
    code: "",
  },
];

function Projects() {
  return (
    <div className="w-full relative py-40">
      <Layout>
        <div className="relative flex flex-wrap gap-x-8 gap-y-16 justify-center z-50">
          {PROJECTS.map((project) => (
            <div
              className="max-w-sm w-fit rounded-2xl overflow-hidden shadow-md bg-white"
              key={project.title}
            >
              <div className="h-54 rounded-2xl overflow-hidden shadow-md">
                <img src={project.img} alt="" className="w-full" />
              </div>
              <div className="py-6 px-4 flex flex-col gap-4">
                <span className="text-title-large">{project.title}</span>
                <p className="text-body-large opacity-60 flex-1">
                  {project.description}
                </p>

                <div className="flex justify-end items-center gap-4">
                  <GitHubIcon
                    className="text-on-background"
                    style={{ fontSize: "32px" }}
                  />
                  <button className="h-8 w-fit px-4 flex items-center justify-center text-label-large bg-dark-background text-white rounded-full">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}

export default Projects;
