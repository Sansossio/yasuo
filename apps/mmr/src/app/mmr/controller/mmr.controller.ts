import { Controller, Get, Query } from '@nestjs/common'
import { MmrService } from '../service/mmr.service'
import { League2MmrDto } from '../dto/league-2-mmr.dto'
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger'
import { Mmr2LeagueDto } from '../dto/mmr-2-league.dto'

@Controller()
@ApiTags('Mmr')
export class MmrController {
  constructor (
    private readonly service: MmrService
  ) {}

  @Get('mmr-2-league')
  @ApiOperation({
    summary: 'Convert mmr to league object'
  })
  @ApiOkResponse({ type: Mmr2LeagueDto })
  mmr2League (
    @Query() { mmr }: League2MmrDto
  ) {
    return this.service.mmr2League(mmr)
  }

  @Get('league-2-mmr')
  @ApiOperation({
    summary: 'Convert league object to mmr'
  })
  @ApiOkResponse({ type: League2MmrDto })
  league2Mmr (
    @Query() params: Mmr2LeagueDto
  ) {
    return this.service.league2Mmr(params)
  }
}
