import { useWhitelabel } from "@/context/Whitelabel";
import { ChangeEvent, CSSProperties, useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const boxStyle: CSSProperties = {
  display: "flex",
  backgroundColor: "var(--secondary-color)",
  border: "none",
  borderRadius: "4px",
  paddingLeft: "12px",
  height: "38px",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.08)",
};

const labelStyle: CSSProperties = {
  fontWeight: "400",
  fontSize: "13px",
};

const inputStyle: CSSProperties = {
  marginTop: "1px",
  width: "100%",
  border: "none",
  fontWeight: "600",
  fontSize: "13px",
};

function SearchBox(props: { query: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { query } = props;
  const [searchQuery, setSearchQuery] = useState<string>(query);
  const { searchInputLabel, searchInputPlaceholder } = useWhitelabel();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const query: string = e.target.value || "";
    setSearchQuery(query);
    router.push(`${pathname}?${createQueryString("query", query)}`);
  };

  return (
    <div style={boxStyle}>
      <span style={labelStyle}>{searchInputLabel}:</span>
      <input
        placeholder={searchInputPlaceholder}
        value={searchQuery}
        onChange={handleSearch}
        style={inputStyle}
      />
    </div>
  );
}

export default SearchBox;
