import { CSSProperties } from 'react';

function Loading() {

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
      Loading...
    </div>
  );

}

export default Loading;
