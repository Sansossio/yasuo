import { MmrService } from './mmr.service'
import { Ranks, Tiers } from '@yasuogg/api-interfaces'

describe('Mmr service', () => {
  const service = new MmrService()
  // MMR to league test
  describe('Mmr to league', () => {
    it('should return IRON IV (last league)', () => {
      expect(service.mmr2League(0)).toEqual({
        tier: 'IRON',
        rank: 'IV',
        points: 0
      })
    })
    it('should return IRON IV with 99 points(last league)', () => {
      expect(service.mmr2League(99)).toEqual({
        tier: 'IRON',
        rank: 'IV',
        points: 99
      })
    })
    it('should return challenger', () => {
      expect(service.mmr2League(5000).tier).toEqual('CHALLENGER')
    })
    it('should return BEONZE (last league)', () => {
      expect(service.mmr2League(400)).toEqual({
        tier: 'BRONZE',
        rank: 'IV',
        points: 0
      })
    })
  })
  // League to mmr
  describe('League to mmr', () => {
    it('should return 400 to BRONZE IV', () => {
      expect(service.league2Mmr({
        rank: Ranks.IV,
        tier: Tiers.BRONZE,
        points: 0
      })).toEqual({ mmr: 400 })
    })
  })
  describe('Combine league <=> mmr', () => {
    function sameTier (tier, rank, points) {
      const data = {
        tier,
        rank,
        points
      }
      const { mmr } = service.league2Mmr(data)
      return service.mmr2League(mmr)
    }
    it('should return the same first league (low elo)', () => {
      const tiers = [
        'IRON',
        'BRONZE',
        'SILVER',
        'GOLD',
        'PLATINUM',
        'DIAMOND'
      ]
      const rank = 'I'
      const points = 99
      for (const tier of tiers) {
        const data = {
          tier,
          rank,
          points
        }
        expect(sameTier(tier, rank, points)).toEqual(data)
      }
    })
    it('should return the same first league (high elo)', () => {
      const tiers = [
        'MASTER',
        'GRANDMASTER',
        'CHALLENGER'
      ]
      const rank = null
      const points = 99
      for (const tier of tiers) {
        const data = {
          tier,
          rank,
          points
        }
        expect(sameTier(tier, rank, points)).toEqual(data)
      }
    })
  })
})
