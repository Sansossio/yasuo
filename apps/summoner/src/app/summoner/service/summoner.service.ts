import { Injectable } from '@nestjs/common'
import { RiotGamesService } from '@yasuogg/riot-games'
import { GetSummonerByNameDto } from '../dto/get-summoner-by-name.dto'
import { SummonerSchema, SummonerDocument } from '@yasuogg/models'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { GetSummonerDto } from '../dto/get-summoner.dto'
import { Regions } from 'twisted/dist/constants'

@Injectable()
export class SummonerService {
  private readonly lolApi = this.riotService.getLolApi()

  constructor (
    @InjectModel(SummonerSchema.name) private readonly repository: Model<SummonerDocument>,
    private readonly riotService: RiotGamesService
  ) {}

  async upsert (summonerName: string, region: Regions) {
    const { response } = await this.lolApi.Summoner.getByName(summonerName, region)
    const summonerInstance = {
      ...response,
      region
    }
    await this.repository.update({ puuid: response.puuid }, summonerInstance, { upsert: true })
    return this.getByName({ summonerName, region })
  }

  async getByName ({ summonerName, region }: GetSummonerByNameDto): Promise<GetSummonerDto> {
    const exists = await this.repository.findOne({
      name: {
        // Case insentive
        $regex: new RegExp(`^${summonerName.toLowerCase()}$`, 'i')
      },
      region
    })
    if (exists) {
      return GetSummonerDto.fromRiotData(exists)
    }
    return this.upsert(summonerName, region)
  }
}
