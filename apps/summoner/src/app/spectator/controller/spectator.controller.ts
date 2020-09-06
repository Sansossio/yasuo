import { Controller, Get, Query, HttpStatus } from '@nestjs/common'
import { GetSummonerByNameDto } from '../../summoner/dto/get-summoner-by-name.dto'
import { SpectatorService } from '../service/spectator.service'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { SpectatorDto } from '../dto/spectator.dto'
import { ApiErrorResponse } from '@yasuogg/http'

@Controller('spectator')
@ApiTags('Spectator')
export class SpectatorController {
  constructor (
    private readonly service: SpectatorService
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Get current summoner active game'
  })
  @ApiOkResponse({ type: SpectatorDto })
  @ApiErrorResponse(
    HttpStatus.NOT_FOUND
  )
  async spectator (
    @Query() params: GetSummonerByNameDto
  ) {
    return this.service.spectator(params)
  }
}
