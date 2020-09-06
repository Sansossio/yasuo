import { GetSummonerLeague } from '@yasuogg/api-interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { SummonerLeague } from '@yasuogg/models'

export class GetSummonerLeagueDto implements GetSummonerLeague {
  @ApiProperty()
  queueType: string

  @ApiProperty()
  hotStreak: boolean

  @ApiProperty()
  wins: number

  @ApiProperty()
  veteran: boolean

  @ApiProperty()
  losses: number

  @ApiProperty()
  rank: string

  @ApiProperty()
  leagueId: string

  @ApiProperty()
  inactive: boolean

  @ApiProperty()
  freshBlood: boolean

  @ApiProperty()
  tier: string

  @ApiProperty()
  leaguePoints: number

  static fromRiotData (league: SummonerLeague): GetSummonerLeagueDto {
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
