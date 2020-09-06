import { SpectatorCurrentParticipant } from '@yasuogg/api-interfaces'
import { SpectatorParticipantPerks } from './spectator-perks.dto'
import { CurrentGameParticipantDTO } from 'twisted/dist/models-dto'
import { ApiProperty } from '@nestjs/swagger'

export class SpectatorParticipant implements SpectatorCurrentParticipant {
  @ApiProperty()
  profileIconId: number

  @ApiProperty()
  championId: number

  @ApiProperty()
  summonerName: string

  @ApiProperty()
  bot: boolean

  @ApiProperty()
  perks: SpectatorParticipantPerks

  @ApiProperty()
  spell2Id: number

  @ApiProperty()
  teamId: number

  @ApiProperty()
  spell1Id: number

  @ApiProperty()
  summonerId: string

  static fromRiotData (data: CurrentGameParticipantDTO): SpectatorParticipant {
    return {
      profileIconId: data.profileIconId,
      championId: data.championId,
      summonerName: data.summonerName,
      bot: data.bot,
      perks: data.perks,
      spell2Id: data.spell2Id,
      teamId: data.teamId,
      spell1Id: data.spell1Id,
      summonerId: data.summonerId
    }
  }
}
