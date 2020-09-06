import { Prop } from '@nestjs/mongoose'
import { SummonerLeague } from './summoner.interface'
import { SummonerLeagueDto } from 'twisted/dist/models-dto'

export class SummonerLeagueDocument implements SummonerLeague {
  @Prop()
  queueType: string

  @Prop()
  hotStreak: boolean

  @Prop()
  wins: number

  @Prop()
  veteran: boolean

  @Prop()
  losses: number

  @Prop()
  rank: string

  @Prop()
  leagueId: string

  @Prop()
  inactive: boolean

  @Prop()
  freshBlood: boolean

  @Prop()
  tier: string

  @Prop()
  leaguePoints: number

  static fromRiotData (league: SummonerLeagueDto): SummonerLeagueDocument {
    return {
      queueType: league.queueType,
      hotStreak: league.hotStreak,
      wins: league.wins,
      veteran: league.veteran,
      losses: league.losses,
      rank: league.rank,
      leagueId: league.leagueId,
      inactive: league.inactive,
      freshBlood: league.freshBlood,
      tier: league.tier,
      leaguePoints: league.leaguePoints
    }
  }
}
