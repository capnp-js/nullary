/* @flow */

export const NULL_ERROR = "Unexpected null value";

export function nonnull<T>(value: null | T): T {
  if (value === null) {
    throw new Error(NULL_ERROR);
  } else {
    return value;
  }
}
