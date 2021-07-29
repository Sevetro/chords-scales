declare type musicalNote = "A" | "Ab" | "A#" | "B" | "Bb" | "C" | "C#" | "D" | "Db" | "D#" | "E" | "Eb" | "F" | "F#" | "G" | "Gb" | "G#";
declare type scalePattern = "ionian" | "dorian" | "phrygian" | "lydian" | "mixolydian" | "aeolian" | "locrian";
declare type flatOrSharp = "flat" | "sharp";
export declare const createScale: (rootNote: musicalNote, scalePattern: scalePattern, flatOrSharp?: flatOrSharp) => string[];
export {};
