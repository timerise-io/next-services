import { CSSProperties } from 'react';

function LabelBox(props: { label: string }) {

  const { label } = props;

  const boxStyle: CSSProperties = {
    display: 'flex',
    backgroundColor: 'var(--secondary-color)',
    border: 'none',
    borderRadius: '4px',
    paddingLeft: '12px',
    height: '38px',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.08)',
  };

  const labelStyle: CSSProperties = {
    fontWeight: '400',
    fontSize: '13px',
  };

  return (
    <div style={boxStyle}>
      <span style={labelStyle}>{label}:</span>
    </div>
  );

}

export default LabelBox;
