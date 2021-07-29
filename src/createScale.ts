type musicalNote =
  | "A"
  | "Ab"
  | "A#"
  | "B"
  | "Bb"
  | "C"
  | "C#"
  | "D"
  | "Db"
  | "D#"
  | "E"
  | "Eb"
  | "F"
  | "F#"
  | "G"
  | "Gb"
  | "G#";

const sharpNotes: musicalNote[] = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
];

export const flatNotes: musicalNote[] = [
  "Ab",
  "A",
  "Bb",
  "B",
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
];

const ionianScaleIntervals = [0, 2, 4, 5, 7, 9, 11];
const dorianScaleIntervals = [0, 2, 3, 5, 7, 9, 10];
const phrygianScaleIntervals = [0, 1, 3, 5, 7, 8, 10];
const lydianScaleIntervals = [0, 2, 4, 6, 7, 9, 11];
const mixolydianScaleIntervals = [0, 2, 4, 5, 7, 9, 10];
const aeolianScaleIntervals = [0, 2, 3, 5, 7, 8, 10];
const locrianScaleIntervals = [0, 1, 3, 5, 6, 8, 10];

type scalePattern =
  | "ionian"
  | "dorian"
  | "phrygian"
  | "lydian"
  | "mixolydian"
  | "aeolian"
  | "locrian";

const scaleMap = {
  ionian: ionianScaleIntervals,
  dorian: dorianScaleIntervals,
  phrygian: phrygianScaleIntervals,
  lydian: lydianScaleIntervals,
  mixolydian: mixolydianScaleIntervals,
  aeolian: aeolianScaleIntervals,
  locrian: locrianScaleIntervals,
};

type flatOrSharp = "flat" | "sharp";

export const createScale = (
  rootNote: musicalNote,
  scalePattern: scalePattern,
  flatOrSharp: flatOrSharp = "sharp"
) => {
  const notes = flatOrSharp === "sharp" ? sharpNotes : flatNotes;
  const scaleIntervals = scaleMap[scalePattern];

  return scaleIntervals.map(
    (interval: number) => notes[(interval + notes.indexOf(rootNote)) % 12]
  );
};
