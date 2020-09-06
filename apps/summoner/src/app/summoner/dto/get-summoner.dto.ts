import { GetSummoner } from '@yasuogg/api-interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { Summoner } from '@yasuogg/models'
import { Regions } from 'twisted/dist/constants'
import { GetSummonerIdsDto } from './get-summoner.ids.dto'
import { GetSummonerLeagueDto } from './get-summoner.league.dto'

export class GetSummonerDto implements GetSummoner {
  @ApiProperty()
  name: string

  @ApiProperty()
  profileIconId: number

  @ApiProperty()
  level: number

  @ApiProperty({
    enum: Regions
  })
  region: Regions

  @ApiProperty({
    type: GetSummonerIdsDto
  })
  ids: GetSummonerIdsDto

  @ApiProperty({
    type: [GetSummonerLeagueDto]
  })
  leagues: GetSummonerLeagueDto[]

  static fromRiotData (summoner: Summoner): GetSummonerDto {
    return {
      name: summoner.name,
      level: summoner.summonerLevel,
      profileIconId: summoner.profileIconId,
      region: summoner.region,
      ids: {
        summonerId: summoner.id,
        accountId: summoner.accountId,
        puuid: summoner.puuid
      },
      leagues: summoner.leagues.map(GetSummonerLeagueDto.fromRiotData)
    }
  }
}
