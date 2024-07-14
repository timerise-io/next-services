import { NextResponse } from 'next/server';
import { z } from 'zod';

export const handleZodError = (error: any) => {
  if (error instanceof z.ZodError) {
    return NextResponse.json(error.format(), { status: 422 });
  }
  return NextResponse.json({}, { status: 500 });
};
