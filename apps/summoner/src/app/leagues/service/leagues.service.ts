import { Injectable } from '@nestjs/common'
import { RiotGamesService } from '@yasuogg/riot-games'
import { Regions } from 'twisted/dist/constants'
import { SummonerLeagueDocument, LeagueDocument, LeagueSchema, SummonerDocument } from '@yasuogg/models'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class LeaguesService {
  private readonly lolApi = this.riotService.getLolApi()

  constructor (
    @InjectModel(LeagueSchema.name) private readonly repository: Model<LeagueDocument>,
    private readonly riotService: RiotGamesService
  ) {}

  async getLeagues (summonerId: string, region: Regions): Promise<SummonerLeagueDocument[]> {
    const { response } = await this.lolApi.League.bySummoner(summonerId, region)
    return response.map(SummonerLeagueDocument.fromRiotData)
  }

  async saveLeagues (summoner: SummonerDocument, leagues: SummonerLeagueDocument[]) {
    const summonerLeagues = leagues.map(league => ({
      ...league,
      summoner: summoner._id
    }))
    await this.repository.create(summonerLeagues)
  }
}
