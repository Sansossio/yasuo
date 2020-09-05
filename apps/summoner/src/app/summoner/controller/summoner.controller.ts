import { Controller, Get, Query } from '@nestjs/common'
import { GetSummonerByNameDto } from '../dto/get-summoner-by-name.dto'
import { SummonerService } from '../service/summoner.service'
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger'
import { GetSummonerDto } from '../dto/get-summoner.dto'

@Controller()
@ApiTags('Summoners')
export class SummonerController {
  constructor (
    private readonly service: SummonerService
  ) {}

  @Get()
  @ApiOkResponse({ type: GetSummonerDto })
  @ApiOperation({
    summary: 'Get summoner by name'
  })
  getSummonerByName (
    @Query() params: GetSummonerByNameDto
  ) {
    return this.service.getByName(params)
  }
}
