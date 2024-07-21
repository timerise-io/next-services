import { Env } from '@/utlis/Env';
import { handleZodError } from '@/utlis/Zod';
import { NextResponse } from 'next/server';

export const GET = async (
  request: Request,
  {
    params: { projectId },
  }: {
    params: { projectId: string };
  },
) => {
  try {
    const params = new URLSearchParams(new URL(request.url).search);
    const q = params.get('query') || undefined;
    const l = params.get('label') || undefined;
    let query: string;
    if (q && l) {
      return handleZodError('Cannot use both query and label parameters');
    }
    if (q && q.length < 3) {
      return handleZodError('Query parameter must be at least 3 characters long');
    }
    if(q && !l) {
      query = JSON.stringify({ query:`{ services(projectId:"${projectId}", query:"${q}") { project { title } locations { title address } serviceId featured title shortDescription durationInfo price shortUrl media { url } draft } }` });
    } else if(l && !q) {
      query = JSON.stringify({ query:`{ services(projectId:"${projectId}", query:"${l}") { project { title } locations { title address } serviceId featured title shortDescription durationInfo price shortUrl media { url } draft } }` });
    } else {
      query = JSON.stringify({ query:`{ services(projectId:"${projectId}" limit:72) { project { title } locations { title address } serviceId featured title shortDescription durationInfo price currency shortUrl media { url } draft } }` });
    }
    const response = await fetch(Env.NEXT_PUBLIC_TIMERISE_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: query
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
