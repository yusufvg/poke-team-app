export const TYPES = [
  {
    type: 'normal',
    offense: [
      { target: 'rock', effect: 0.5 },
      { target: 'steel', effect: 0.5 },
      { target: 'ghost', effect: 0 },
    ],
    defense: [
      { target: 'ghost', effect: 0 },
      { target: 'fighting', effect: 2 },
    ],
  },
  {
    type: 'fire',
    offense: [
      { target: 'fire', effect: 0.5 },
      { target: 'water', effect: 0.5 },
      { target: 'rock', effect: 0.5 },
      { target: 'dragon', effect: 0.5 },
      { target: 'grass', effect: 0.5 },
      { target: 'ice', effect: 0.5 },
      { target: 'bug', effect: 0.5 },
      { target: 'steel', effect: 0.5 },
    ],
    defense: [
      { target: 'fire', effect: 0.5 },
      { target: 'water', effect: 2 },
      { target: 'rock', effect: 2 },
      { target: 'ground', effect: 2 },
      { target: 'grass', effect: 0.5 },
      { target: 'ice', effect: 0.5 },
      { target: 'bug', effect: 0.5 },
      { target: 'steel', effect: 0.5 },
      { target: 'fairy', effect: 0.5 },
    ],
  },
  {
    type: 'water',
    offense: [
      { target: 'fire', effect: 2 },
      { target: 'water', effect: 0.5 },
      { target: 'grass', effect: 0.5 },
      { target: 'ground', effect: 2 },
      { target: 'rock', effect: 2 },
      { target: 'dragon', effect: 0.5 },
    ],
    defense: [
      { target: 'fire', effect: 0.5 },
      { target: 'water', effect: 0.5 },
      { target: 'grass', effect: 2 },
      { target: 'electric', effect: 2 },
      { target: 'ice', effect: 0.5 },
      { target: 'steel', effect: 0.5 },
    ],
  },
  {
    type: 'electric',
    offense: [
      { target: 'water', effect: 2 },
      { target: 'electric', effect: 0.5 },
      { target: 'grass', effect: 0.5 },
      { target: 'ground', effect: 0 },
      { target: 'flying', effect: 2 },
      { target: 'dragon', effect: 0.5 },
    ],
    defense: [
      { target: 'electric', effect: 0.5 },
      { target: 'ground', effect: 2 },
      { target: 'flying', effect: 0.5 },
      { target: 'steel', effect: 0.5 },
    ],
  },
  {
    type: 'grass',
    offense: [
      { target: 'fire', effect: 0.5 },
      { target: 'grass', effect: 0.5 },
      { target: 'poison', effect: 0.5 },
      { target: 'flying', effect: 0.5 },
      { target: 'bug', effect: 0.5 },
      { target: 'dragon', effect: 0.5 },
      { target: 'steel', effect: 0.5 },
      { target: 'water', effect: 2 },
      { target: 'ground', effect: 2 },
      { target: 'rock', effect: 2 },
    ],
    defense: [
      { target: 'water', effect: 0.5 },
      { target: 'electric', effect: 0.5 },
      { target: 'grass', effect: 0.5 },
      { target: 'ground', effect: 0.5 },
      { target: 'fire', effect: 2 },
      { target: 'ice', effect: 2 },
      { target: 'poison', effect: 2 },
      { target: 'flying', effect: 2 },
      { target: 'bug', effect: 2 },
    ],
  },
  {
    type: 'ice',
    offense: [
      { target: 'fire', effect: 0.5 },
      { target: 'water', effect: 0.5 },
      { target: 'ice', effect: 0.5 },
      { target: 'steel', effect: 0.5 },
      { target: 'grass', effect: 2 },
      { target: 'ground', effect: 2 },
      { target: 'flying', effect: 2 },
      { target: 'dragon', effect: 2 },
    ],
    defense: [
      { target: 'ice', effect: 0.5 },
      { target: 'fire', effect: 2 },
      { target: 'fighting', effect: 2 },
      { target: 'rock', effect: 2 },
      { target: 'steel', effect: 2 },
    ],
  },
  {
    type: 'fighting',
    offense: [
      { target: 'poison', effect: 0.5 },
      { target: 'flying', effect: 0.5 },
      { target: 'psychic', effect: 0.5 },
      { target: 'bug', effect: 0.5 },
      { target: 'fairy', effect: 0.5 },
      { target: 'normal', effect: 2 },
      { target: 'ice', effect: 2 },
      { target: 'rock', effect: 2 },
      { target: 'dark', effect: 2 },
      { target: 'steel', effect: 2 },
      { target: 'ghost', effect: 0 },
    ],
    defense: [
      { target: 'bug', effect: 0.5 },
      { target: 'rock', effect: 0.5 },
      { target: 'dark', effect: 0.5 },
      { target: 'flying', effect: 2 },
      { target: 'psychic', effect: 2 },
      { target: 'fairy', effect: 2 },
    ],
  },
  {
    type: 'poison',
    offense: [
      { target: 'poison', effect: 0.5 },
      { target: 'ground', effect: 0.5 },
      { target: 'rock', effect: 0.5 },
      { target: 'ghost', effect: 0.5 },
      { target: 'ghost', effect: 0.5 },
      { target: 'grass', effect: 2 },
      { target: 'fairy', effect: 2 },
      { target: 'steel', effect: 0 },
    ],
    defense: [
      { target: 'grass', effect: 0.5 },
      { target: 'fighting', effect: 0.5 },
      { target: 'poison', effect: 0.5 },
      { target: 'bug', effect: 0.5 },
      { target: 'fairy', effect: 0.5 },
      { target: 'ground', effect: 2 },
      { target: 'psychic', effect: 2 },
    ],
  },
  {
    type: 'ground',
    offense: [
      { target: 'grass', effect: 0.5 },
      { target: 'bug', effect: 0.5 },
      { target: 'fire', effect: 2 },
      { target: 'electric', effect: 2 },
      { target: 'poison', effect: 2 },
      { target: 'rock', effect: 2 },
      { target: 'steel', effect: 2 },
      { target: 'flying', effect: 0 },
    ],
    defense: [
      { target: 'poison', effect: 0.5 },
      { target: 'rock', effect: 0.5 },
      { target: 'water', effect: 2 },
      { target: 'grass', effect: 2 },
      { target: 'ice', effect: 2 },
      { target: 'electric', effect: 0 },
    ],
  },
  {
    type: 'flying',
    offense: [
      { target: 'electric', effect: 0.5 },
      { target: 'rock', effect: 0.5 },
      { target: 'steel', effect: 0.5 },
      { target: 'grass', effect: 2 },
      { target: 'fighting', effect: 2 },
      { target: 'bug', effect: 2 },
    ],
    defense: [
      { target: 'grass', effect: 0.5 },
      { target: 'fighting', effect: 0.5 },
      { target: 'bug', effect: 0.5 },
      { target: 'electric', effect: 2 },
      { target: 'ice', effect: 2 },
      { target: 'rock', effect: 2 },
      { target: 'ground', effect: 0 },
    ],
  },
  {
    type: 'psychic',
    offense: [
      { target: 'psychic', effect: 0.5 },
      { target: 'steel', effect: 0.5 },
      { target: 'fighting', effect: 2 },
      { target: 'poison', effect: 2 },
      { target: 'dark', effect: 0 },
    ],
    defense: [
      { target: 'fighting', effect: 0.5 },
      { target: 'psychic', effect: 0.5 },
      { target: 'bug', effect: 2 },
      { target: 'ghost', effect: 2 },
      { target: 'dark', effect: 2 },
    ],
  },
  {
    type: 'bug',
    offense: [
      { target: 'fire', effect: 0.5 },
      { target: 'fighting', effect: 0.5 },
      { target: 'poison', effect: 0.5 },
      { target: 'flying', effect: 0.5 },
      { target: 'ghost', effect: 0.5 },
      { target: 'steel', effect: 0.5 },
      { target: 'fairy', effect: 0.5 },
      { target: 'grass', effect: 2 },
      { target: 'psychic', effect: 2 },
      { target: 'dark', effect: 2 },
    ],
    defense: [
      { target: 'grass', effect: 0.5 },
      { target: 'fighting', effect: 0.5 },
      { target: 'ground', effect: 0.5 },
      { target: 'fire', effect: 2 },
      { target: 'flying', effect: 2 },
      { target: 'rock', effect: 2 },
    ],
  },
  {
    type: 'rock',
    offense: [
      { target: 'fighting', effect: 0.5 },
      { target: 'ground', effect: 0.5 },
      { target: 'steel', effect: 0.5 },
      { target: 'fire', effect: 2 },
      { target: 'ice', effect: 2 },
      { target: 'flying', effect: 2 },
      { target: 'bug', effect: 2 },
    ],
    defense: [
      { target: 'normal', effect: 0.5 },
      { target: 'fire', effect: 0.5 },
      { target: 'poison', effect: 0.5 },
      { target: 'flying', effect: 0.5 },
      { target: 'water', effect: 2 },
      { target: 'grass', effect: 2 },
      { target: 'fighting', effect: 2 },
      { target: 'ground', effect: 2 },
      { target: 'steel', effect: 2 },
    ],
  },
  {
    type: 'ghost',
    offense: [
      { target: 'dark', effect: 0.5 },
      { target: 'ghost', effect: 2 },
      { target: 'psychic', effect: 2 },
      { target: 'normal', effect: 2 },
    ],
    defense: [
      { target: 'poison', effect: 0.5 },
      { target: 'bug', effect: 0.5 },
      { target: 'ghost', effect: 2 },
      { target: 'dark', effect: 2 },
      { target: 'normal', effect: 0 },
      { target: 'fighting', effect: 0 },
    ],
  },
  {
    type: 'dragon',
    offense: [
      { target: 'steel', effect: 0.5 },
      { target: 'dragon', effect: 2 },
      { target: 'fairy', effect: 0 },
    ],
    defense: [
      { target: 'fire', effect: 0.5 },
      { target: 'water', effect: 0.5 },
      { target: 'electric', effect: 0.5 },
      { target: 'grass', effect: 0.5 },
      { target: 'ice', effect: 2 },
      { target: 'dragon', effect: 2 },
      { target: 'fairy', effect: 2 },
    ],
  },
  {
    type: 'dark',
    offense: [
      { target: 'fighting', effect: 0.5 },
      { target: 'dark', effect: 0.5 },
      { target: 'fairy', effect: 0.5 },
      { target: 'pyschic', effect: 2 },
      { target: 'ghost', effect: 2 },
    ],
    defense: [
      { target: 'ghost', effect: 0.5 },
      { target: 'dark', effect: 0.5 },
      { target: 'fighting', effect: 2 },
      { target: 'bug', effect: 2 },
      { target: 'fairy', effect: 2 },
      { target: 'psychic', effect: 0 },
    ],
  },
  {
    type: 'steel',
    offense: [
      { target: 'fire', effect: 0.5 },
      { target: 'water', effect: 0.5 },
      { target: 'electric', effect: 0.5 },
      { target: 'steel', effect: 0.5 },
      { target: 'ice', effect: 2 },
      { target: 'rock', effect: 2 },
      { target: 'fairy', effect: 2 },
    ],
    defense: [
      { target: 'normal', effect: 0.5 },
      { target: 'grass', effect: 0.5 },
      { target: 'ice', effect: 0.5 },
      { target: 'flying', effect: 0.5 },
      { target: 'psychic', effect: 0.5 },
      { target: 'bug', effect: 0.5 },
      { target: 'rock', effect: 0.5 },
      { target: 'dragon', effect: 0.5 },
      { target: 'steel', effect: 0.5 },
      { target: 'fairy', effect: 0.5 },
      { target: 'fire', effect: 2 },
      { target: 'fighting', effect: 2 },
      { target: 'ground', effect: 2 },
      { target: 'poison', effect: 0 },
    ],
  },
  {
    type: 'fairy',
    offense: [
      { target: 'fire', effect: 0.5 },
      { target: 'poison', effect: 0.5 },
      { target: 'steel', effect: 0.5 },
      { target: 'fighting', effect: 2 },
      { target: 'dragon', effect: 2 },
      { target: 'dark', effect: 2 },
    ],
    defense: [
      { target: 'fighting', effect: 0.5 },
      { target: 'bug', effect: 0.5 },
      { target: 'dark', effect: 0.5 },
      { target: 'poison', effect: 2 },
      { target: 'steel', effect: 2 },
      { target: 'dragon', effect: 0 },
    ],
  },
];