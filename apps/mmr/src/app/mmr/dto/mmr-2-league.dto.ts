import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Mmr2League, Tiers, Ranks } from '@yasuogg/api-interfaces'
import { IsEnum, IsNotEmpty, IsOptional, Min, IsNumber } from 'class-validator'
import { Type } from 'class-transformer'

export class Mmr2LeagueDto implements Mmr2League {
  @ApiProperty({
    enum: Ranks
  })
  @IsEnum(Ranks)
  @IsNotEmpty()
  rank: Ranks

  @ApiProperty({
    enum: Tiers
  })
  @IsEnum(Tiers)
  @IsNotEmpty()
  tier: Tiers

  @ApiPropertyOptional()
  @Min(0)
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  points?: number
}
