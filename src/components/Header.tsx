'use client';

import { CSSProperties } from 'react';
import { useMediaQuery } from 'react-responsive';
import Logo from './Logo';
import LabelsFilterBox from './LabelsFilterBox';
import SearchBox from './SearchBox';
import { mediaQueries } from '@/utlis/MediaQueries';
import { useWhitelabel } from '@/context/Whitelabel';
import ProjectsFilterBox from './ProjectsFilterBox';

function Header(props: { query: string, label: string, projects?: { projectId: string; title: string }[], labels?: string[] }) {

  const { query, label, projects, labels } = props;

  console.log(projects)
  
  const isMobile = useMediaQuery({ query: mediaQueries.isMobile });
  const { searchShow } = useWhitelabel();

  const componentStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'start' : 'center',
    justifyContent: 'space-between',
    gap: '10px',
    margin: '10px',
    padding: '30px 0px',
  };

  const formStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: isMobile ? 'column' : 'row',
    textAlign: 'left',
    gap: '10px',
    width: isMobile ? '100%' : 'auto',
  };

  return (
    <div style={componentStyle}>
      <Logo />
      {searchShow && searchShow === true && (
      <div style={formStyle}>
        <SearchBox query={query} />
        {projects && projects.length > 0 && (
        <ProjectsFilterBox projects={projects} projectId={''} label={''} />
        )}
        {labels && labels.length > 0 && (
        <LabelsFilterBox labels={labels} label={label} />
        )}
      </div>
      )}
    </div>
  );

}

export default Header;
