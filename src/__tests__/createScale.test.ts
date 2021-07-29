import { createScale } from "..";
import { flatNotes } from "..";

it("returns A aeolian scale", () =>
  expect(createScale("A", "aeolian")).toStrictEqual([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
  ]));

it("returns flat notes", () =>
  expect(
    createScale("B", "aeolian", "flat").every((note) =>
      flatNotes.includes(note)
    )
  ).toBe(true));
