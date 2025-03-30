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
    link: "https://notesapp-react-akzo.onrender.com/",
    code: "https://github.com/am1553/notesapp-react",
  },
  {
    title: "Personal Finance",
    description:
      "A personal finance dashboard application to manage budget and transactions.",
    img: PersonalFinanceProjectImg,
    link: "https://www.personal-finance.dev/login",
    code: "https://github.com/am1553/personal-finance",
  },
  {
    title: "Kanban Board",
    description: "A Full Stack productivity tool to manage and track tasks.",
    img: KanbanBoardProjectImg,
    link: "https://kanban-react-app.onrender.com/auth",
    code: "https://github.com/am1553/kanban-client",
  },
  {
    title: "Invoice Management",
    description:
      "A CRUD web app to keep a record of invoices integrated with Google Firebase.",
    img: InvoiceManagementProjectImg,
    link: "https://am1553.github.io/invoice-app/",
    code: "https://github.com/am1553/invoice-app",
  },
  {
    title: "Audiophile E-commerce",
    description:
      "A complete e-commerce CRUD web app made to be responsive across all devices.",
    img: AudiophileProject,
    link: "https://am1553.github.io/audiophile/",
    code: "https://github.com/am1553/audiophile",
  },
  {
    title: "Entertainment",
    description:
      "A SPA for entertainment platform showcasing movies and shows.",
    img: EntertainmentProject,
    link: "https://am1553.github.io/entertainment-web-app/",
    code: "https://github.com/am1553/entertainment-web-app",
  },
  {
    title: "PhotoSnap Art Gallery",
    description:
      "A landing page for art gallery with animations for better user experience.",
    img: PhotosnapProject,
    link: "https://am1553.github.io/photosnap/",
    code: "https://github.com/am1553/photosnap",
  },
];

function Projects() {
  return (
    <section className="w-full relative py-40" id="projects">
      <Layout>
        <div className="relative flex flex-wrap gap-x-8 gap-y-16 justify-center z-50">
          {PROJECTS.map((project) => (
            <div
              className="max-w-sm w-fit rounded-2xl overflow-hidden shadow-md bg-white"
              key={project.title}
            >
              <div
                className="h-54 rounded-2xl overflow-hidden shadow-md"
                style={{
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="py-6 px-4 flex flex-col gap-4">
                <span className="text-title-large">{project.title}</span>
                <p className="text-body-large opacity-60 flex-1">
                  {project.description}
                </p>

                <div className="flex justify-end items-center gap-4">
                  <a href={project.code} target="_blank">
                    <GitHubIcon
                      className="text-on-background"
                      style={{ fontSize: "32px" }}
                    />
                  </a>
                  <a
                    className="h-8 w-fit px-4 flex items-center justify-center text-label-large bg-dark-background text-white rounded-full"
                    href={project.link}
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
}

export default Projects;
