import { Injectable } from '@nestjs/common'
import { LolApi, TftApi } from 'twisted'
import { ConfigService } from '@nestjs/config'
import { IBaseApiParams } from 'twisted/dist/base/base.utils'

@Injectable()
export class RiotGamesService {
  private readonly config: IBaseApiParams = {
    key: this.configService.get('riot.apiKey'),
    concurrency: this.configService.get('riot.concurrency'),
    debug: this.configService.get('riot.debug'),
    rateLimitRetry: this.configService.get('riot.rateLimitRetry'),
    rateLimitRetryAttempts: this.configService.get('riot.rateLimitRetryAttemptsy')
  }

  private readonly lolApi = new LolApi(this.config)
  private readonly tftApi = new TftApi(this.config)

  constructor (
    private readonly configService: ConfigService
  ) {}

  getLolApi () {
    return this.lolApi
  }

  getTftApi () {
    return this.tftApi
  }
}
