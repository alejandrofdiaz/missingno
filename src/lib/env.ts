export interface ENVType {
  VERSION: string;
  WP_ENDPOINT: string;
}

declare var ENV: ENVType;
export const Env: ENVType = {
  ...ENV,
};
