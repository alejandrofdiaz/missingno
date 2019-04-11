import { Env } from 'lib/env';
import wpapi from 'wpapi';

export const api = new wpapi({
  endpoint: Env.WP_ENDPOINT,
});
