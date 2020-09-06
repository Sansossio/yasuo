import { BannedChampion } from 'twisted/dist/models-dto'
import { ApiProperty } from '@nestjs/swagger'

export class SpectatorBannedChampDto implements BannedChampion {
  @ApiProperty()
  pickTurn: number

  @ApiProperty()
  championId: number

  @ApiProperty()
  teamId: number

  static fromRiotData (data: BannedChampion): SpectatorBannedChampDto {
    return {
      pickTurn: data.pickTurn,
      championId: data.championId,
      teamId: data.teamId || 0
    }
  }
}
