import { CSSProperties, useState } from 'react';
import { t } from 'i18next';
import { useWhitelabel } from '@/context/Whitelabel';

function LabelsFilterBox(props: { labels: string[], label: string }) {

  const { labels, label } = props;
  const { labelsSelectLabel } = useWhitelabel();

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

  const [searchParams, setSearchParams] = useState<{label: string}>({label});

  return (
    <div style={boxStyle}>
      <span style={labelStyle}>{labelsSelectLabel}:</span>
        <select onChange={(e: any) => setSearchParams({ label: e.target.value })} value={searchParams.label} style={selectStyle}>
          <option value="">{t('all')}</option>
          {labels && labels.length > 0 && labels.map((label: string, index: number) => (
          <option key={index} value={label}>{label}</option>
          ))}
      </select>
    </div>
  );

}

export default LabelsFilterBox;
