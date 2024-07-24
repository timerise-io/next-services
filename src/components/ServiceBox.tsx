import { ServiceInterface } from "@/utlis/Types";
import { CSSProperties } from "react";
import { useMediaQuery } from "react-responsive";
import ReactMarkdown from "react-markdown";
import { mediaQueries } from "@/utlis/MediaQueries";
import Link from "next/link";
import { useWhitelabel } from "@/context/Whitelabel";
import Image from "next/image";

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
  } = props.service;

  const { bookingAppUrl, bookingAppButtonLabel, locale } = useWhitelabel();

  const bookingPageUrl: string = bookingAppUrl + "/service/" + serviceId;

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
      <div style={{ width: "100%" }}>
        <div
          className="mb-3"
          style={{ position: "relative", width: "100%", height: "256px" }}
        >
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
              className="w-4 mr-2"
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
              className="w-4 mr-2"
            />
            <div>
              <p className="text-sm font-semibold">{hosts[0].fullName}</p>
            </div>
          </div>
        )}
        {durationInfo && (
          <div className="flex flex-row items-center mt-2">
            <Image
              width={16}
              height={16}
              src="https://cdn.timerise.io/app/info-duration.png"
              alt="Duration"
              className="w-4 mr-2"
            />
            <div>
              <p className="text-sm font-semibold">{durationInfo}</p>
            </div>
          </div>
        )}
        {!!price && price > 0 && (
          <div className="flex flex-row items-center mt-2">
            <Image
              width={16}
              height={16}
              src="https://cdn.timerise.io/app/info-price.png"
              alt="Price"
              className="w-4 mr-2"
            />
            <div>
              <p className="text-sm font-semibold">
                {localPrice.format(price)}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="w-full mt-10">
        <Link
          href={bookingPageUrl + (locale ? "?locale=" + locale : "")}
          className="h-10 font-bold w-full"
        >
          {bookingAppButtonLabel}
        </Link>
      </div>
    </div>
  );
}

export default ServiceBox;
