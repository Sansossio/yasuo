import { SpectatorCurrentParticipant } from '@yasuogg/api-interfaces'
import { SpectatorParticipantPerks } from './spectator-perks.dto'
import { CurrentGameParticipantDTO } from 'twisted/dist/models-dto'
import { ApiProperty } from '@nestjs/swagger'
import { GetSummonerDto } from '../../summoner/dto/get-summoner.dto'

export class SpectatorParticipant implements SpectatorCurrentParticipant {
  @ApiProperty()
  profileIconId: number

  @ApiProperty()
  championId: number

  @ApiProperty()
  bot: boolean

  @ApiProperty()
  perks: SpectatorParticipantPerks

  @ApiProperty()
  teamId: number

  @ApiProperty({
    type: [Number, Number]
  })
  spells: [number, number]

  @ApiProperty({
    type: GetSummonerDto
  })
  summoner: GetSummonerDto

  static fromRiotData (data: CurrentGameParticipantDTO, summoner: GetSummonerDto): SpectatorParticipant {
    return {
      profileIconId: data.profileIconId,
      championId: data.championId,
      bot: data.bot,
      perks: data.perks,
      teamId: data.teamId,
      spells: [data.spell1Id, data.spell2Id],
      summoner
    }
  }
}
