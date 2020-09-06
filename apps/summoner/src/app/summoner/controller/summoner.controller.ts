import { Controller, Get, Query, Post, Body } from '@nestjs/common'
import { GetSummonerByNameDto } from '../dto/get-summoner-by-name.dto'
import { SummonerService } from '../service/summoner.service'
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger'
import { GetSummonerDto } from '../dto/get-summoner.dto'
import { ApiErrorResponse } from '@yasuogg/http'

@Controller()
@ApiTags('Summoners')
export class SummonerController {
  constructor (
    private readonly service: SummonerService
  ) {}

  @Get()
  @ApiOkResponse({ type: GetSummonerDto })
  @ApiErrorResponse()
  @ApiOperation({
    summary: 'Get summoner by name'
  })
  getSummonerByName (
    @Query() params: GetSummonerByNameDto
  ) {
    return this.service.getByName(params)
  }

  @Post('update')
  @ApiOkResponse({ type: GetSummonerDto })
  @ApiErrorResponse()
  @ApiOperation({
    summary: 'Update summoner by name'
  })
  updateSummoner (
    @Body() body: GetSummonerByNameDto
  ) {
    return this.service.upsert(body.summonerName, body.region)
  }
}
