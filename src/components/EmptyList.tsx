import { CSSProperties } from 'react';

function EmptyList() {

  const componentStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'calc(100vh - 128px)',
  };

  return (
    <div style={componentStyle}>
      <p>No results</p>
    </div>
  );

}

export default EmptyList;
