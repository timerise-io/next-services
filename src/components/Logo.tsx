/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useWhitelabel } from "@/context/Whitelabel";

function Logo() {
  const { organizationId, projectId, title, logoUrl } = useWhitelabel();

  return (
    <Link href={organizationId ? '/' : '/' + projectId}>
      <img src={logoUrl} alt={title} className="max-h-6" />
    </Link>
  );
}

export default Logo;
