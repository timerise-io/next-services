import { ServiceInterface } from "@/utlis/Types";
import { CSSProperties, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ReactMarkdown from "react-markdown";
import { mediaQueries } from "@/utlis/MediaQueries";
import Link from "next/link";
import { useWhitelabel } from "@/context/Whitelabel";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function ServiceBox(props: { service: ServiceInterface }) {
  const {
    serviceId,
    media,
    title,
    shortDescription,
    locations,
    hosts,
    durationInfo,
    price,
    currency,
    featured,
  } = props.service;

  const {
    bookingAppUrl,
    bookingAppButtonLabel,
    locale,
    featuredLabel,
    primaryColor,
    secondaryColor,
  } = useWhitelabel();

  const bookingPageUrl: string = bookingAppUrl + "/service/" + serviceId;

  const [isHover, setIsHover] = useState<boolean>(false);
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: mediaQueries.isMobile });
  const isTablet = useMediaQuery({ query: mediaQueries.isTablet });

  const boxStyle: CSSProperties = {
    width: isMobile
      ? "calc(100% - 20px)"
      : isTablet
      ? "calc((100% / 2) - 20px)"
      : "calc((100% / 3) - 20px)",
    backgroundColor: "var(--secondary-color)",
    border: "none",
    borderRadius: "4px",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.08)",
  };

  const localPrice = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency || "USD",
  });

  const mediaUrl =
    media && media[0]
      ? media[0].url
      : "https://cdn.timerise.io/app/placeholder-light.png";

  return (
    <div
      style={boxStyle}
      className="flex flex-col justify-between items-start p-5 m-2.5"
    >
      <div>
        <div className="h-64 mb-3 relative">
          {featuredLabel && featured && (
            <span
              className="absolute top-2 right-2 text-white text-[12px] font-medium px-2 py-1 rounded"
              style={{ background: secondaryColor, zIndex: 9999 }}
            >
              {t("featured")}
            </span>
          )}
          <Image
            fill
            src={mediaUrl}
            alt={title}
            className="w-full aspect-4/3 object-cover"
          />
        </div>
        <div className="mb-2">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        {shortDescription && (
          <div className="mb-3 text-sm">
            <ReactMarkdown>{shortDescription}</ReactMarkdown>
          </div>
        )}
        {locations && locations[0] && (
          <div className="flex flex-row items-start mt-2">
            <Image
              width={16}
              height={16}
              src="https://cdn.timerise.io/app/info-address.png"
              alt="Host"
              className="mr-2"
            />
            <div>
              <p className="text-sm font-semibold">{locations[0].title}</p>
            </div>
          </div>
        )}
        {hosts && hosts[0] && (
          <div className="flex flex-row items-center mt-2">
            <Image
              width={16}
              height={16}
              src="https://cdn.timerise.io/app/info-host.png"
              alt="Host"
              className="mr-2"
            />
            <p className="text-sm font-semibold">{hosts[0].fullName}</p>
          </div>
        )}
        {durationInfo && (
          <div className="flex flex-row items-center mt-2">
            <Image
              width={16}
              height={16}
              src="https://cdn.timerise.io/app/info-duration.png"
              alt="Duration"
              className="mr-2"
            />
            <p className="text-sm font-semibold">{durationInfo}</p>
          </div>
        )}
        {!!price && price > 0 && (
          <div className="flex flex-row items-center mt-2">
            <Image
              width={16}
              height={16}
              src="https://cdn.timerise.io/app/info-price.png"
              alt="Price"
              className="mr-2"
            />

            <p className="text-sm font-semibold m-0">
              {localPrice.format(price)}
            </p>
          </div>
        )}
      </div>
      {primaryColor && (
        <div
          className={`w-full mt-10 border-[1px] rounded-md text-center`}
          style={{ borderColor: primaryColor }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Link
            href={bookingPageUrl + (locale ? "?locale=" + locale : "")}
            className={`flex py-2 text-sm font-bold w-full justify-center items-center`}
            style={isHover ? { color: '#FFFFFF', backgroundColor: primaryColor } : { color: primaryColor }}
          >
            {bookingAppButtonLabel}
          </Link>
        </div>
      )}
    </div>
  );
}

export default ServiceBox;
