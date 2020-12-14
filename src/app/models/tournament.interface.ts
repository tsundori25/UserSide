export interface Tournament {
  _id?: string;
  name: string;
  tournamentType: string;
  participants: string[];
  subDistrict: string;
  prizePool: PrizePool;
}
export interface PrizePool {
  firstPrize: number;
  secondPrize: number;
  thirdPrize: number;
}
