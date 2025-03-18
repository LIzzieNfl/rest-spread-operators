console.log("Script is running!");

/* Task 1: Unveiling the Coordinates */
const coordinates = {x: 34, y: 42, z: 67};
const { x, y } = coordinates;
console.log(x, y);

/* Task 2: The Map of Secrets */
const locations = {
  first: "Cave of Wonders",
  second: "Lake of Mystery",
  third: "Mount of Ages",
  fourth: "Desert of Shadows"
};
const { first, second, ...remaining } = locations;
console.log(first, second);

/* Task 3: The Mysterious Door */
const doorCode = {
  upper: "Alpha",
  lower: "Omega"
};
const { upper, middle = "Lake of Mystery", lower } = doorCode;
console.log(upper, middle, lower);

/* Task 4: The Guardian's Riddle */
const riddle = {
  ancientWord: "Sphinx",
  modernWord: "Cat"
};
const { ancientWord: translation } = riddle;
console.log(translation);

/* Task 5: The Array of Elements */
const elements = ["Fire", "Water", "Earth", "Air"];
const [element1, element2] = elements;
console.log(element1, element2);

/* Task 6: Skipping Stones */
const stones = [1, 2, 3, 4, 5, 6];
const [stone1, , , , , stone6] = stones;
console.log(stone1, stone6);

/* Task 7: The Array of Shadows */
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];
const [visibleShadow, ...hiddenShadows] = shadows;
console.log(visibleShadow, hiddenShadows);

/* Task 8: The Wise Function */
function revealPath({ direction, distance }) {
  console.log(`Travel ${direction} for ${distance} miles.`);
}

/* Task 9: The Scroll of Defaults */
function mixPotion({ ingredient1 = "Water", ingredient2 = "Fireflower" }) {
  console.log(`Mixing ${ingredient1} and ${ingredient2}.`);
}

/* Task 10: The Array Spell */
function castSpell([ingredient1, ingredient2]) {
  console.log(`Casting a spell with ${ingredient1} and ${ingredient2}!`);
}

/* Task 11: The Nested Secret */
const nestedSecret = {outer: {inner: "The Final Key"}};
const { outer: { inner } } = nestedSecret;
console.log(inner);

/* Task 12: The Swap of Fate */
let stoneA = "Emerald";
let stoneB = "Ruby";
[stoneA, stoneB] = [stoneB, stoneA];
console.log(stoneA, stoneB);
