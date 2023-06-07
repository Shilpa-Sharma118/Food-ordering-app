import { sum } from "../sum";

test("check sum of 2 positive numbers", () => {
  expect(sum(2, 5)).toBe(7);
});

test("check sum of 2 negative numbers", () => {
  expect(sum(-2, -5)).toBe(-7);
});
