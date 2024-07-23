import Link from "next/link";
import React from "react";
import { useWhitelabel } from "@/context/Whitelabel";

function Logo() {
  const { title } = useWhitelabel();

  return <Link href={"/"}>{title}</Link>;
}

export default Logo;
