import { Injectable } from '@nestjs/common'
import { RiotGamesService } from '@yasuogg/riot-games'
import { GetSummonerByNameDto } from '../dto/get-summoner-by-name.dto'
import { SummonerSchema, SummonerDocument } from '@yasuogg/models'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { GetSummonerDto } from '../dto/get-summoner.dto'
import { Regions } from 'twisted/dist/constants'
import { LeaguesService } from '../../leagues/service/leagues.service'

@Injectable()
export class SummonerService {
  private readonly lolApi = this.riotService.getLolApi()

  constructor (
    @InjectModel(SummonerSchema.name) private readonly repository: Model<SummonerDocument>,
    private readonly riotService: RiotGamesService,
    private readonly leagueService: LeaguesService
  ) {}

  async upsert (summonerName: string, region: Regions) {
    const { response } = await this.lolApi.Summoner.getByName(summonerName, region)
    const leagues = await this.leagueService.getLeagues(response.id, region)
    await this.repository.updateOne(
      { puuid: response.puuid },
      {
        ...response,
        region,
        leagues
      },
      { upsert: true }
    )

    // Add new summoner leagues
    const summoner = await this.get({ summonerName, region })
    await this.leagueService.saveLeagues(summoner, leagues)

    return this.getByName({ summonerName, region })
  }

  async getByName ({ summonerName, region }: GetSummonerByNameDto): Promise<GetSummonerDto> {
    const exists = await this.get({ summonerName, region })
    if (exists) {
      return GetSummonerDto.fromRiotData(exists)
    }
    return this.upsert(summonerName, region)
  }

  async get ({ summonerName, region }: GetSummonerByNameDto) {
    return this.repository.findOne({
      name: {
        // Case insentive
        $regex: new RegExp(`^${summonerName.toLowerCase()}$`, 'i')
      },
      region
    })
  }
}
