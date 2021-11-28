import { Move } from './Move';

export interface Pokemon {
  name: string;
  types: string[];
  moveset: Move[];
}
