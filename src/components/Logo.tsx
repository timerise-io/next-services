/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useWhitelabel } from "@/context/Whitelabel";

function Logo() {
  const { organizationId, projectId, title, logoUrl, logoHref } = useWhitelabel();

  if (!logoUrl || logoUrl.length === 0) {
    return null;
  }

  return (
    <Link href={organizationId ? logoHref : '/' + projectId}>
      <img src={logoUrl} alt={title} className="max-h-[32px]" />
    </Link>
  );
}

export default Logo;
