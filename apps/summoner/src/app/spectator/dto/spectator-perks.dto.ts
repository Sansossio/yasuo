import { PerksDTO } from 'twisted/dist/models-dto'
import { ApiProperty } from '@nestjs/swagger'

export class SpectatorParticipantPerks implements PerksDTO {
  @ApiProperty({
    type: [Number]
  })
  perkIds: number[]

  @ApiProperty()
  perkStyle: number

  @ApiProperty()
  perkSubStyle: number
}
