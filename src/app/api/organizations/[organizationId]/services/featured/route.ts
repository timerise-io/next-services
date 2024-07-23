import { Env } from "@/utlis/Env";
import { handleZodError } from "@/utlis/Zod";
import { NextResponse } from "next/server";

export const GET = async (
  _: Request,
  {
    params: { organizationId },
  }: {
    params: { organizationId: string };
  }
) => {
  try {
    let query: string = JSON.stringify({
      query: `{ services(organizationId:"${organizationId}" featured:true draft:false limit:72) { project { title } locations { title address } serviceId featured title shortDescription durationInfo price currency shortUrl media { url } draft } }`,
    });
    const response = await fetch(Env.NEXT_PUBLIC_TIMERISE_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: query,
    });
    if (!response.ok) {
      return handleZodError(response.status);
    }
    const result = await response.json();
    return NextResponse.json(result.data?.services || []);
  } catch (error) {
    return handleZodError(error);
  }
};
