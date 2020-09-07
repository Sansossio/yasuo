import { Tiers, Ranks } from '@yasuogg/api-interfaces'

const pointsPerRank = 100
const tiersPerRank = 4
const pointsPerTier = pointsPerRank * tiersPerRank

export default {
  pointsPerRank,
  tiersPerRank,
  pointsPerTier,
  ranks: [
    Ranks.IV,
    Ranks.III,
    Ranks.II,
    Ranks.I
  ],
  tiers: [
    { name: Tiers.IRON, ranks: true },
    { name: Tiers.BRONZE, ranks: true },
    { name: Tiers.SILVER, ranks: true },
    { name: Tiers.GOLD, ranks: true },
    { name: Tiers.PLATINUM, ranks: true },
    { name: Tiers.DIAMOND, ranks: true },
    { name: Tiers.MASTER, ranks: false },
    { name: Tiers.GRANDMASTER, ranks: false },
    { name: Tiers.CHALLENGER, ranks: false }
  ]
}
