import wpapi from 'wpapi';

import { Env } from '../lib/env';

export const api = new wpapi({
  endpoint: Env.WP_ENDPOINT,
}).setHeaders({});

console.log(Env);