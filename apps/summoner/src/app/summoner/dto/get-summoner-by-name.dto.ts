import { IsString, IsNotEmpty, IsEnum } from 'class-validator'
import { Regions } from 'twisted/dist/constants'
import { ApiProperty } from '@nestjs/swagger'

export class GetSummonerByNameDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'El Castiel'
  })
  summonerName: string

  @IsEnum(Regions)
  @IsNotEmpty()
  @ApiProperty({
    enum: Regions,
    example: Regions.EU_WEST
  })
  region: Regions
}
