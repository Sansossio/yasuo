import { IsString, IsNotEmpty, IsEnum } from 'class-validator'
import { Regions } from 'twisted/dist/constants'
import { ApiProperty } from '@nestjs/swagger'

export class GetSummonerByNameDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  summonerName: string

  @IsEnum(Regions)
  @IsNotEmpty()
  @ApiProperty({
    enum: Regions
  })
  region: Regions
}
