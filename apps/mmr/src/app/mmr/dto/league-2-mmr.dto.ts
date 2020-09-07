import { ApiProperty } from '@nestjs/swagger'
import { League2MmrResponse } from '@yasuogg/api-interfaces'
import { IsNotEmpty, Min, IsNumber } from 'class-validator'
import { Type } from 'class-transformer'

export class League2MmrDto implements League2MmrResponse {
  @ApiProperty()
  @Min(0)
  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  mmr: number
}
