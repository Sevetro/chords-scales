"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createScale = void 0;
var sharpNotes = [
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
var flatNotes = [
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
var ionianScaleIntervals = [0, 2, 4, 5, 7, 9, 11];
var dorianScaleIntervals = [0, 2, 3, 5, 7, 9, 10];
var phrygianScaleIntervals = [0, 1, 3, 5, 7, 8, 10];
var lydianScaleIntervals = [0, 2, 4, 6, 7, 9, 11];
var mixolydianScaleIntervals = [0, 2, 4, 5, 7, 9, 10];
var aeolianScaleIntervals = [0, 2, 3, 5, 7, 8, 10];
var locrianScaleIntervals = [0, 1, 3, 5, 6, 8, 10];
var scaleMap = {
    ionian: ionianScaleIntervals,
    dorian: dorianScaleIntervals,
    phrygian: phrygianScaleIntervals,
    lydian: lydianScaleIntervals,
    mixolydian: mixolydianScaleIntervals,
    aeolian: aeolianScaleIntervals,
    locrian: locrianScaleIntervals,
};
var createScale = function (rootNote, scalePattern, flatOrSharp) {
    if (flatOrSharp === void 0) { flatOrSharp = "sharp"; }
    var notes = flatOrSharp === "sharp" ? sharpNotes : flatNotes;
    var scaleIntervals = scaleMap[scalePattern];
    return scaleIntervals.map(function (interval) { return notes[(interval + notes.indexOf(rootNote)) % 12]; });
};
exports.createScale = createScale;
console.log(exports.createScale("A", "aeolian"));
