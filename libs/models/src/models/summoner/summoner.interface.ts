import { Regions } from 'twisted/dist/constants'

export interface Summoner {
  id: string
  accountId: string
  puuid: string
  name: string
  profileIconId: number
  revisionDate: number
  summonerLevel: number
  region: Regions
}
