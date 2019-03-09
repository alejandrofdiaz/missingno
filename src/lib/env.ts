export interface ENVType {
  development: boolean;
  mock: boolean;
  WP_ENDPOINT: string;
}

declare var ENV: ENVType;
export const Env: ENVType = {
  ...ENV,
};
