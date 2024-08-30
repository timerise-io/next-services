import { ChangeEvent, CSSProperties, useState } from "react";
import { useWhitelabel } from "@/context/Whitelabel";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Select } from "@headlessui/react";

const boxStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "var(--secondary-color)",
  border: "none",
  borderRadius: "4px",
  paddingLeft: "12px",
  height: "42px",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.08)",
};

function ProjectsBox(props: {
  projectId: string | undefined;
  projects: { projectId: string; title: string }[];
}) {
  const router = useRouter();

  const { projectId, projects } = props;
  const { projectsBoxLabel } = useWhitelabel();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const query: string = e.target.value;
    router.push(`/${query}`);
  };

  const { t } = useTranslation();

  return (
    <div className="flex items-center bg-[var(--secondary-color)] border-none rounded-md pl-3 h-[42px] shadow-sm pr-2">
      <span className="text-[13px] font-normal">{projectsBoxLabel}:</span>
      <Select
        onChange={handleChange}
        className="w-[180px] border-none rounded-md outline-none text-[13px] mt-[1px] font-semibold pl-2"
        value={projectId}
      >
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
      </Select>
    </div>
  );
}

export default ProjectsBox;
