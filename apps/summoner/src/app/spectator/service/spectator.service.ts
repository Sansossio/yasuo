import { Injectable, NotFoundException } from '@nestjs/common'
import { RiotGamesService } from '@yasuogg/riot-games'
import { GetSummonerByNameDto } from '../../summoner/dto/get-summoner-by-name.dto'
import { SummonerService } from '../../summoner/service/summoner.service'
import { SpectatorDto } from '../dto/spectator.dto'

@Injectable()
export class SpectatorService {
  private readonly lolApi = this.riotApi.getLolApi()

  constructor (
    private readonly summonerService: SummonerService,
    private readonly riotApi: RiotGamesService
  ) {}

  async spectator ({ summonerName, region }: GetSummonerByNameDto) {
    const summoner = await this.summonerService.getByName({ summonerName, region })
    if (!summoner) {
      throw new NotFoundException()
    }
    const data = await this.lolApi.Spectator.activeGame(summoner.ids.summonerId, region)
    if ('message' in data) {
      throw new NotFoundException(data.message)
    }
    const { response } = data
    const summonerList = await Promise.all(
      response
        .participants
        .map(
          ({ summonerName }) => this.summonerService.getByName({ summonerName, region })
        )
    )
    return SpectatorDto.fromRiotData(response, summonerList)
  }
}
