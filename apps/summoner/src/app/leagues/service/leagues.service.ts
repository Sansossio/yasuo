import { Injectable, HttpService } from '@nestjs/common'
import { RiotGamesService } from '@yasuogg/riot-games'
import { Regions } from 'twisted/dist/constants'
import { SummonerLeagueDocument, LeagueDocument, LeagueSchema, SummonerDocument } from '@yasuogg/models'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { ConfigService } from '@nestjs/config'
import { League2MmrResponse } from '../../../../../../libs/api-interfaces/src'

@Injectable()
export class LeaguesService {
  private readonly lolApi = this.riotService.getLolApi()
  private readonly mmrApi = this.config.get<string>('services.mmr')

  constructor (
    @InjectModel(LeagueSchema.name) private readonly repository: Model<LeagueDocument>,
    private readonly riotService: RiotGamesService,
    private readonly config: ConfigService,
    private readonly http: HttpService
  ) {}

  private async getMmr (league: SummonerLeagueDocument): Promise<number> {
    const url = `${this.mmrApi}/league-2-mmr`
    const { data: {
      mmr
    } } = await this.http.get<League2MmrResponse>(url, {
      params: {
        rank: league.rank,
        tier: league.tier,
        points: league.leaguePoints
      }
    }).toPromise()
    return mmr
  }

  async getLeagues (summonerId: string, region: Regions): Promise<SummonerLeagueDocument[]> {
    const { response } = await this.lolApi.League.bySummoner(summonerId, region)
    return response.map(SummonerLeagueDocument.fromRiotData)
  }

  async saveLeagues (summoner: SummonerDocument, leagues: SummonerLeagueDocument[]) {
    const summonerLeagues = []
    for (const league of leagues) {
      const mmr = await this.getMmr(league)
      summonerLeagues.push({
        ...league,
        summoner: summoner._id,
        mmr
      })
    }
    await this.repository.create(summonerLeagues)
  }
}
