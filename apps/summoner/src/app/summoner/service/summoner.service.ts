import { Injectable } from '@nestjs/common'
import { RiotGamesService } from '@yasuogg/riot-games'
import { GetSummonerByNameDto } from '../dto/get-summoner-by-name.dto'

@Injectable()
export class SummonerService {
  private readonly lolApi = this.riotService.getLolApi()

  constructor (
    private readonly riotService: RiotGamesService
  ) {}

  async getByName (params: GetSummonerByNameDto) {
    const { response } = await this.lolApi.Summoner.getByName(params.summonerName, params.region)
    return response
  }
}
