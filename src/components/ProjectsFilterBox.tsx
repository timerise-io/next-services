import { CSSProperties, useState } from 'react';
import { t } from 'i18next';
import { useWhitelabel } from '@/context/Whitelabel';

function ProjectsFilterBox(props: { projectId: string; projects: { projectId: string; title: string }[], label: string }) {

  const { projectId, projects, label } = props;
  const { projectsSelectLabel } = useWhitelabel();

  const boxStyle: CSSProperties = {
    display: 'flex',
    backgroundColor: 'var(--secondary-color)',
    border: 'none',
    borderRadius: '4px',
    paddingLeft: '12px',
    height: '38px',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.08)',
  };

  const selectStyle: CSSProperties = {
    marginTop: '0px',
    width: '180px',
    border: 'none',
    borderRadius: '4px',
    fontWeight: '600',
    fontSize: '13px',
  };

  const labelStyle: CSSProperties = {
    fontWeight: '400',
    fontSize: '13px',
  };

  const [searchParams, setSearchParams] = useState<{title: string}>({ title: '' });

  return (
    <div style={boxStyle}>
      <span style={labelStyle}>{projectsSelectLabel}:</span>
        <select onChange={(e: any) => setSearchParams({ title: e.target.value })} value={searchParams.title} style={selectStyle}>
          <option value="">{t('all')}</option>
          {projects && projects.length > 0 && projects.map((project: {projectId: string; title: string} , index: number) => (
          <option key={index} value={project.projectId}>{project.title}</option>
          ))}
      </select>
    </div>
  );

}

export default ProjectsFilterBox;
