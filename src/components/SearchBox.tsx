import { useWhitelabel } from "@/context/Whitelabel";
import { ChangeEvent, CSSProperties, useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@headlessui/react";

const boxStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "var(--secondary-color)",
  border: "none",
  borderRadius: "4px",
  paddingLeft: "12px",
  height: "42px",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.08)",
};

function SearchBox(props: { query: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { query } = props;
  const [searchQuery, setSearchQuery] = useState<string>(query);
  const { searchBoxLabel, searchBoxPlaceholder } = useWhitelabel();

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
      <span className="text-[13px] font-normal">{searchBoxLabel}:</span>
      <Input
        placeholder={searchBoxPlaceholder}
        defaultValue={searchQuery}
        onChange={handleSearch}
        className="outline-none text-[13px] border-none mt-[1px] w-full pl-2 font-semibold"
      />
    </div>
  );
}

export default SearchBox;
