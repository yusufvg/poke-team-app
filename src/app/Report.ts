import { Matchup } from './Matchup';

export interface Report {
  offense: Matchup[];
  defense: Matchup[];
}
