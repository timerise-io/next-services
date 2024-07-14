import { useWhitelabel } from '@/context/Whitelabel';
import { CSSProperties, useState } from 'react';

function SearchBox(props: { query: string }) {

  const { query } = props;
  const { searchInputLabel, searchInputPlaceholder } = useWhitelabel();

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

  const inputStyle: CSSProperties = {
    marginTop: '1px',
    width: '100%',
    border: 'none',
    fontWeight: '600',
    fontSize: '13px',
  };

  const [searchParams, setSearchParams] = useState<{query: string}>({query});

  return (
    <div style={boxStyle}>
      <span style={labelStyle}>{searchInputLabel}:</span>
      <input placeholder={searchInputPlaceholder} value={searchParams.query} onChange={(e: any) => setSearchParams({ query: e.target.value })} style={inputStyle} />
    </div>
  );

}

export default SearchBox;
