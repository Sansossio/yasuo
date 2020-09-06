import { Regions } from 'twisted/dist/constants'

export interface SummonerLeague {
  queueType: string
  hotStreak: boolean
  wins: number
  veteran: boolean
  losses: number
  rank: string
  leagueId: string
  inactive: boolean
  freshBlood: boolean
  tier: string
  leaguePoints: number
}

export interface Summoner {
  id: string
  accountId: string
  puuid: string
  name: string
  profileIconId: number
  revisionDate: number
  summonerLevel: number
  leagues: SummonerLeague[]
  region: Regions
}
