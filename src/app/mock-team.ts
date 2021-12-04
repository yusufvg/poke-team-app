import { Pokemon } from './interfaces/Pokemon';

export const TEAM: Pokemon[] = [
  {
    name: 'Luxray',
    types: ['electric'],
    moveset: [
      { name: 'Ice Fang', type: 'ice' },
      { name: 'Discharge', type: 'electric' },
      { name: 'Thuder Wave', type: 'electric' },
      { name: 'Crunch', type: 'dark' },
    ],
  },
  // {
  //   name: 'Infernape',
  //   types: ['fire', 'fighting'],
  //   moveset: [
  //     { name: 'Flame Wheel', type: 'fire' },
  //     { name: 'Flare Blitz', type: 'fire' },
  //     { name: 'Close Combat', type: 'fighting' },
  //     { name: 'Acrobatics', type: 'flying' },
  //   ],
  // },
  // {
  //   name: 'Tentacruel',
  //   types: ['water', 'poison'],
  //   moveset: [
  //     { name: 'Surf', type: 'water' },
  //     { name: 'Flare Blitz', type: 'fire' },
  //     { name: 'Close Combat', type: 'fighting' },
  //     { name: 'Acrobatics', type: 'flying' },
  //   ],
  // },
  // {
  //   name: 'Garchomp',
  //   types: ['dragon', 'ground'],
  //   moveset: [
  //     { name: 'Earthquake', type: 'ground' },
  //     { name: 'Dig', type: 'ground' },
  //     { name: 'Dragon Claw', type: 'dragon' },
  //     { name: 'Crunch', type: 'dark' },
  //   ],
  // },
  // {
  //   name: 'Abomasnow',
  //   types: ['ice', 'grass'],
  //   moveset: [
  //     { name: 'Magical Leaf', type: 'grass' },
  //     { name: 'Sheer Cold', type: 'ice' },
  //     { name: 'Blizzard', type: 'ice' },
  //     { name: 'Ice Punch', type: 'ice' },
  //   ],
  // },
  // {
  //   name: 'Dialga',
  //   types: ['steel', 'dragon'],
  //   moveset: [
  //     { name: 'Power Gem', type: 'rock' },
  //     { name: 'Roar of Time', type: 'dragon' },
  //     { name: 'Flash Cannon', type: 'steel' },
  //     { name: 'Aura Sphere', type: 'fighting' },
  //   ],
  // },
];
