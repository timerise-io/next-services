import * as React from 'react';

function Error(props: any) {

  return (
    <div>{props?.error || 'unknown error'}</div>
  );

}

export default Error;
