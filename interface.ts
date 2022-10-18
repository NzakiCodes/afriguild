export interface IPlayer {
  id?:number;
  name: string;
  handle: string;
  image: string;
  points: number;
  isRankingHigh?: boolean;
  isRankingLow?:boolean;
}
