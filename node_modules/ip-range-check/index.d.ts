/**
 *
 * @param {string} addr
 * @param {(string | string[])} range
 * @returns {boolean}
 */
declare function check_many_cidrs(
  addr: string,
  range: string | string[]
): boolean;

declare namespace check_many_cidrs {}

declare module "ip-range-check" {
  export = check_many_cidrs;
}
