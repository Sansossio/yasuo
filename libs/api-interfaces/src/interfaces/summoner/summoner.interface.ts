import { Regions } from 'twisted/dist/constants'

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
}
