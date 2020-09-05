import { Injectable } from '@nestjs/common'
import { RiotGamesService } from '@yasuogg/riot-games'
import { GetSummonerByNameDto } from '../dto/get-summoner-by-name.dto'
import { SummonerSchema, SummonerDocument } from '@yasuogg/models'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class SummonerService {
  private readonly lolApi = this.riotService.getLolApi()

  constructor (
    @InjectModel(SummonerSchema.name) private readonly repository: Model<SummonerDocument>,
    private readonly riotService: RiotGamesService
  ) {}

  async getByName ({ summonerName, region }: GetSummonerByNameDto) {
    const exists = await this.repository.findOne({
      name: {
        // Case insentive
        $regex: new RegExp(`^${summonerName.toLowerCase()}$`, 'i')
      },
      region
    })
    if (exists) {
      return exists
    }
    const { response } = await this.lolApi.Summoner.getByName(summonerName, region)
    await this.repository.create({
      ...response,
      region
    })
    return response
  }
}
