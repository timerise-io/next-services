"use client";

import { useMediaQuery } from "react-responsive";
import { useWhitelabel } from "@/context/Whitelabel";
import { mediaQueries } from "@/utlis/MediaQueries";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { title, locale, privacyUrl, termsUrl } = useWhitelabel();

  const isMobile = useMediaQuery({ query: mediaQueries.isMobile });
  const isTablet = useMediaQuery({ query: mediaQueries.isTablet });

  const { t } = useTranslation();

  return (
    <footer className="flex justify-between flex-row p-3 mt-4.5">
      <div
        className={`flex justify-between gap-2 ${
          isMobile || isTablet ? "flex-col" : "flex-row"
        } text-left`}
      >
        <p className="text-xs mr-auto mb-2.5">{title} © 2024</p>
        <a className="text-xs mr-auto mb-1.25" href={privacyUrl}>
          {t("pp")}
        </a>
        <a className="text-xs mr-auto mb-2.5" href={termsUrl}>
          {t("t_and_c")}
        </a>
        {/* <p className="text-xs mr-auto mb-1.25">{t('timezone')}: {timezone}</p> */}
        <p className="text-xs mr-auto mb-1.25">
          {t("locale")}: {locale}
        </p>
      </div>
    </footer>
  );
}
