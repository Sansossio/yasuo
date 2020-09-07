import mmrConfig from '../mmr.config'
import { Mmr2LeagueDto } from '../dto/mmr-2-league.dto'
import { Tiers } from '@yasuogg/api-interfaces'
import { Injectable } from '@nestjs/common'
import { League2MmrDto } from '../dto/league-2-mmr.dto'

const {
  pointsPerRank,
  pointsPerTier,
  ranks,
  tiers,
  tiersPerRank
} = mmrConfig

@Injectable()
export class MmrService {
  mmr2League (mmr: number): Mmr2LeagueDto {
    if (typeof mmr !== 'number' || mmr < 0) {
      return {
        tier: Tiers.UNRANKED,
        rank: null,
        points: null
      }
    }

    // Calc
    const rankIndex = Math.floor(mmr / pointsPerTier)
    const tierPoints = mmr - (rankIndex * pointsPerTier)
    let tierIndex = Math.floor(tierPoints / pointsPerRank)
    let points = tierPoints % pointsPerRank

    // Response
    let tier = rankIndex >= tiers.length ? tiers[tiers.length - 1] : tiers[rankIndex]
    let rank = ranks[tierIndex]

    if (rankIndex >= tiers.length) {
      tier = tiers[tiers.length - 1]
      tierIndex += (rankIndex - (tiers.length - 1)) * tiersPerRank
    }

    if (!tier.ranks) {
      rank = null
      points += tierIndex * pointsPerRank
    }

    return {
      rank,
      tier: tier.name,
      points
    }
  }

  league2Mmr ({ tier, points, rank }: Mmr2LeagueDto): League2MmrDto {
    if (!points) {
      points = 0
    }
    const tierIndex = tiers.findIndex(t => t.name === tier)
    let rankIndex
    if (!rank) {
      rankIndex = 0
    } else {
      rankIndex = ranks.findIndex(r => r === rank)
    }
    const mmr = (rankIndex * pointsPerRank) + (tierIndex * pointsPerTier) + points
    return {
      mmr
    }
  }
}
