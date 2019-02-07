/* @flow */

import * as assert from "assert";
import { describe, it } from "mocha";

import { nonnull } from "../../src/nonnull";

describe("nonnull", function () {
  it("throws for null values", function () {
    assert.throws(() => nonnull(null));
  });

  it("doesn't throw for nonnull values", function () {
    assert.doesNotThrow(() => nonnull(7));
    assert.doesNotThrow(() => nonnull(""));
  });
});
