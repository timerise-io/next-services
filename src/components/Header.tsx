"use client";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import Logo from "./Logo";
import LabelsBox from "./LabelsBox";
import SearchBox from "./SearchBox";
import { mediaQueries } from "@/utlis/MediaQueries";
import { useWhitelabel } from "@/context/Whitelabel";
import ProjectsBox from "./ProjectsBox";
import { CSSProperties } from "react";

function Header(props: {
  query: string;
  label: string;
  projects?: { projectId: string; title: string }[];
}) {
  const { query, label, projects } = props;
  const isMobile = useMediaQuery({ query: mediaQueries.isMobile });
  const { projectId, searchBox, labelsBox, projectsBox, labels } =
    useWhitelabel();

    const componentStyle: CSSProperties = {
      marginLeft: 'auto',
    };

  return (
    <div
      className={clsx(
        "flex gap-[10px] m-[10px] py-[30px] px-0",
        isMobile ? "flex-col items-start" : "flex-row items-center",
        "justify-between"
      )}
    >
      <Logo />
      <div
        className={clsx(
          "flex justify-between text-left gap-[10px]",
          isMobile ? "flex-col w-full" : "flex-row w-auto"
        )}
        style={componentStyle}
      >
        {labelsBox && labels && labels.length > 0 && (
          <LabelsBox label={label} />
        )}
        {projectsBox && projects && projects.length > 0 && (
          <ProjectsBox projects={projects} projectId={projectId} />
        )}
        {searchBox && <SearchBox query={query} />}
      </div>
    </div>
  );
}

export default Header;
