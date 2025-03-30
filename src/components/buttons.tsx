import React, { SetStateAction } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const MenuBtn = ({
  menuState,
}: {
  menuState: {
    menuActive: boolean;
    setMenuActive: React.Dispatch<SetStateAction<boolean>>;
  };
}) => {
  const handleBtn = () => menuState.setMenuActive((prev) => !prev);
  return (
    <button
      onClick={handleBtn}
      className={`h-6 w-6 flex md:hidden cursor-pointer flex-col justify-evenly relative before:absolute before:bg-black before:h-[2px] before:w-5 before:top-2 after:absolute before:transition-transform after:transition-transform after:bg-black after:h-[2px] after:w-5 after:bottom-2  ${
        menuState.menuActive &&
        "before:rotate-45 before:top-2/4 before:origin-center after:origin-center after:-rotate-45 after:top-2/4 menu-active"
      }`}
    ></button>
  );
};

const LinkedInBtn = ({ className }: { className: string }) => (
  <a
    className={`flex items-center bg-primary text-on-primary rounded-full pl-6 pr-4 gap-2 h-10 text-label-small md:text-label-medium lg:text-label-large w-fit cursor-pointer ${className}`}
    target="_blank"
    href="https://www.linkedin.com/in/aryanmehta-dev"
  >
    <span>Connect on LinkedIn</span>
    <ChevronRightIcon
      style={{ fontSize: "18px" }}
      className="text-on-primary"
    />
  </a>
);
const ViewProjectsBtn = ({ className }: { className: string }) => (
  <a
    className={`flex items-center bg-primary text-on-primary rounded-full pl-6 pr-4 gap-2 h-10 text-label-small md:text-label-medium lg:text-label-large w-fit cursor-pointer ${className}`}
    href="#projects"
  >
    <span>View Projects</span>
    <ChevronRightIcon
      style={{ fontSize: "18px" }}
      className="text-on-primary"
    />
  </a>
);

const Buttons = {
  MenuBtn,
  LinkedInBtn,
  ViewProjectsBtn,
};

export default Buttons;
