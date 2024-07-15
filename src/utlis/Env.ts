/* eslint-disable import/prefer-default-export */
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// Don't add NODE_ENV into T3 Env, it changes the tree-shaking behavior
export const Env = createEnv({
  server: {
    TIMERISE_API_KEY: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_TIMERISE_API_ENDPOINT: z.string(),
  },
  runtimeEnv: {
    TIMERISE_API_KEY: process.env.TIMERISE_API_KEY,
    NEXT_PUBLIC_TIMERISE_API_ENDPOINT: process.env.NEXT_PUBLIC_TIMERISE_API_ENDPOINT,
  },
});
