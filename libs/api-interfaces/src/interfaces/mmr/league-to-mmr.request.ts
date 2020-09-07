import { Ranks } from './ranks'
import { Tiers } from './tiers'

export interface League2MmrRequest {
  rank: Ranks
  tier?: Tiers
  points?: number
}
