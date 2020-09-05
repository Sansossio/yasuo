import { GetSummoner } from '@yasuogg/api-interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { Summoner } from '@yasuogg/models'
import { Regions } from 'twisted/dist/constants'
import { GetSummonerIdsDto } from './get-summoner.ids.dto'

export class GetSummonerDto implements GetSummoner {
  @ApiProperty()
  name: string

  @ApiProperty()
  profileIconId: number

  @ApiProperty()
  revisionDate: Date

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

  static fromRiotData (summoner: Summoner): GetSummonerDto {
    return {
      name: summoner.name,
      level: summoner.summonerLevel,
      revisionDate: new Date(summoner.revisionDate),
      profileIconId: summoner.profileIconId,
      region: summoner.region,
      ids: {
        summonerId: summoner.id,
        accountId: summoner.accountId,
        puuid: summoner.puuid
      }
    }
  }
}
