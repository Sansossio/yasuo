import { ApiProperty } from '@nestjs/swagger'

export class GetSummonerIdsDto {
  @ApiProperty()
  summonerId: string

  @ApiProperty()
  accountId: string

  @ApiProperty()
  puuid: string
}
