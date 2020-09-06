import { Controller, Get, Query } from '@nestjs/common'
import { GetSummonerByNameDto } from '../../summoner/dto/get-summoner-by-name.dto'
import { SpectatorService } from '../service/spectator.service'
import { ApiOkResponse } from '@nestjs/swagger'
import { SpectatorDto } from '../dto/spectator.dto'

@Controller()
export class SpectatorController {
  constructor (
    private readonly service: SpectatorService
  ) {}

  @Get('spectator')
  @ApiOkResponse({ type: SpectatorDto })
  async spectator (
    @Query() params: GetSummonerByNameDto
  ) {
    return this.service.spectator(params)
  }
}
