import { ChangeEvent, CSSProperties, useState } from "react";
import { useWhitelabel } from "@/context/Whitelabel";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const boxStyle: CSSProperties = {
  display: "flex",
  backgroundColor: "var(--secondary-color)",
  border: "none",
  borderRadius: "4px",
  paddingLeft: "12px",
  height: "38px",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.08)",
};

const selectStyle: CSSProperties = {
  marginTop: "0px",
  width: "180px",
  border: "none",
  borderRadius: "4px",
  fontWeight: "600",
  fontSize: "13px",
};

const labelStyle: CSSProperties = {
  fontWeight: "400",
  fontSize: "13px",
};

function ProjectsFilterBox(props: {
  projectId: string;
  projects: { projectId: string; title: string }[];
  label: string;
}) {
  const router = useRouter();

  const { projectId, projects, label } = props;
  const { projectsSelectLabel } = useWhitelabel();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    console.log(e);
    const query: string = e.target.value;

    router.push(`/${query}`);
  };

  const { t } = useTranslation();

  return (
    <div style={boxStyle}>
      <span style={labelStyle}>{projectsSelectLabel}:</span>
      <select onChange={handleChange} style={selectStyle}>
        <option value="">{t("all")}</option>
        {projects &&
          projects.length > 0 &&
          projects.map(
            (project: { projectId: string; title: string }, index: number) => (
              <option key={index} value={project.projectId}>
                {project.title}
              </option>
            )
          )}
      </select>
    </div>
  );
}

export default ProjectsFilterBox;
