import { Regions } from 'twisted/dist/constants'

export interface GetSummoner {
  name: string
  profileIconId: number
  revisionDate: Date
  level: number
  region: Regions
  ids: {
    summonerId: string
    accountId: string
    puuid: string
  }
}
