import { Regions } from 'twisted/dist/constants'

export interface GetSummonerLeague {
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

export interface GetSummoner {
  name: string
  profileIconId: number
  level: number
  region: Regions
  ids: {
    summonerId: string
    accountId: string
    puuid: string
  }
  leagues: GetSummonerLeague[]
}
