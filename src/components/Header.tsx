"use client";

import { CSSProperties } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "./Logo";
import LabelsBox from "./LabelsBox";
import SearchBox from "./SearchBox";
import { mediaQueries } from "@/utlis/MediaQueries";
import { useWhitelabel } from "@/context/Whitelabel";
import ProjectsBox from "./ProjectsBox";

function Header(props: {
  query: string;
  label: string;
  projects?: { projectId: string; title: string }[];
}) {
  const { query, label, projects } = props;

  const isMobile = useMediaQuery({ query: mediaQueries.isMobile });
  const { organizationId, projectId, searchBox, labelsBox, projectsBox, labels } =
    useWhitelabel();

  const componentStyle: CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "start" : "center",
    justifyContent: "space-between",
    gap: "10px",
    margin: "10px",
    padding: "30px 0px",
  };

  const formStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: isMobile ? "column" : "row",
    textAlign: "left",
    gap: "10px",
    width: isMobile ? "100%" : "auto",
  };

  return (
    <div style={componentStyle}>
      <Logo />
      <div style={formStyle}>
        {searchBox && searchBox === true && <SearchBox query={query} />}
        {organizationId && projectsBox && projects && projects.length > 0 && (
          <ProjectsBox projects={projects} projectId={projectId} />
        )}
        {labelsBox && labels && labels.length > 0 && (
          <LabelsBox label={label} />
        )}
      </div>
    </div>
  );
}

export default Header;
