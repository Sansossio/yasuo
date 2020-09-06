import { Spectator } from '@yasuogg/api-interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { SpectatorBannedChampDto } from './spectator-banned-champion.dto'
import { SpectatorParticipant } from './spectator-participant.dto'
import { CurrentGameInfoDTO } from 'twisted/dist/models-dto'

export class SpectatorDto implements Spectator {
  @ApiProperty()
  gameId: number

  @ApiProperty()
  gameStartTime: number

  @ApiProperty()
  platformId: string

  @ApiProperty()
  gameMode: string

  @ApiProperty()
  mapId: number

  @ApiProperty()
  gameType: string

  @ApiProperty({
    type: [SpectatorBannedChampDto]
  })
  bannedChampions: SpectatorBannedChampDto[]

  @ApiProperty({
    type: [SpectatorParticipant]
  })
  participants: SpectatorParticipant[]

  @ApiProperty()
  gameLength: number

  static fromRiotData (riotData: CurrentGameInfoDTO): SpectatorDto {
    return {
      gameId: riotData.gameId,
      gameStartTime: riotData.gameStartTime,
      platformId: riotData.platformId,
      gameMode: riotData.gameMode,
      mapId: riotData.mapId,
      gameType: riotData.gameType,
      bannedChampions: riotData.bannedChampions.map(SpectatorBannedChampDto.fromRiotData),
      participants: riotData.participants.map(SpectatorParticipant.fromRiotData),
      gameLength: riotData.gameLength
    }
  }
}
