import { expect, test } from "vitest";

import { addition } from "../src/index";

test("Sum two numbers is 15", () => {
  const sum = addition(5, 10);
  expect(sum).toBe(15);
});
