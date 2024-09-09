import { ChangeEvent, useCallback } from "react";
import { useWhitelabel } from "@/context/Whitelabel";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Select } from "@headlessui/react";

function LabelsBox(props: { label: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { label } = props;
  const { labelsBoxLabel, labels } = useWhitelabel();

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
    router.push(`/?${createQueryString("label", label)}`);
  };

  const { t } = useTranslation();

  return (
    <div className="flex items-center bg-[var(--secondary-color)] border-none rounded-md pl-3 h-[42px] shadow-sm pr-2">
      <span className="text-[13px] font-normal">{labelsBoxLabel}:</span>
      <Select onChange={handleChange} value={label} className="w-[180px] border-none rounded-md outline-none text-[13px] mt-[1px] font-semibold pl-2">
        <option value="">{t("all")}</option>
        {labels &&
          labels.length > 0 &&
          labels.map((label: string, index: number) => (
            <option key={index} value={label}>
              {label}
            </option>
          ))}
      </Select>
    </div>
  );
}

export default LabelsBox;
