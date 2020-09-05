import { Module } from '@nestjs/common'
import { SummonerController } from './controller/summoner.controller'
import { SummonerService } from './service/summoner.service'

@Module({
  controllers: [
    SummonerController
  ],
  providers: [
    SummonerService
  ]
})
export class SummonerModule {}
