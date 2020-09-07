import { Ranks } from './ranks'
import { Tiers } from './tiers'

export interface Mmr2League {
  rank: Ranks
  tier: Tiers
  points?: number
}
