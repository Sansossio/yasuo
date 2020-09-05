import { Controller, Get, Query } from '@nestjs/common'
import { GetSummonerByNameDto } from '../dto/get-summoner-by-name.dto'
import { SummonerService } from '../service/summoner.service'

@Controller()
export class SummonerController {
  constructor (
    private readonly service: SummonerService
  ) {}

  @Get()
  getSummonerByName (
    @Query() params: GetSummonerByNameDto
  ) {
    return this.service.getByName(params)
  }
}
