import { Injectable } from '@nestjs/common'
import { RiotGamesService } from '@yasuogg/riot-games'
import { Regions } from 'twisted/dist/constants'
import { SummonerLeagueDocument } from '@yasuogg/models'

@Injectable()
export class LeaguesService {
  private readonly lolApi = this.riotService.getLolApi()

  constructor (
    private readonly riotService: RiotGamesService
  ) {}

  async getLeagues (summonerId: string, region: Regions): Promise<SummonerLeagueDocument[]> {
    const { response } = await this.lolApi.League.bySummoner(summonerId, region)
    return response.map(SummonerLeagueDocument.fromRiotData)
  }
}
