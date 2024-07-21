import { ChangeEvent, CSSProperties, useCallback, useState } from "react";
import { useWhitelabel } from "@/context/Whitelabel";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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

function LabelsFilterBox(props: { labels: string[]; label: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { labels, label } = props;
  const { labelsSelectLabel } = useWhitelabel();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const label: string = e.target.value;
    if (!label || label.length < 3) return;
    router.push(`${pathname}?${createQueryString("label", label)}`);
  };

  const { t } = useTranslation();

  return (
    <div style={boxStyle}>
      <span style={labelStyle}>{labelsSelectLabel}:</span>
      <select onChange={handleChange} value={label} style={selectStyle}>
        <option value="">{t("all")}</option>
        {labels &&
          labels.length > 0 &&
          labels.map((label: string, index: number) => (
            <option key={index} value={label}>
              {label}
            </option>
          ))}
      </select>
    </div>
  );
}

export default LabelsFilterBox;
