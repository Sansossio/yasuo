import { Module } from '@nestjs/common'
import { SummonerController } from './controller/summoner.controller'
import { SummonerService } from './service/summoner.service'
import { DatabaseModule } from '@yasuogg/database'
import { SummonerSchema } from '@yasuogg/models'
import { LeaguesModule } from '../leagues/leagues.module'

@Module({
  imports: [
    DatabaseModule.forFeature([
      SummonerSchema
    ]),
    LeaguesModule
  ],
  controllers: [
    SummonerController
  ],
  providers: [
    SummonerService
  ]
})
export class SummonerModule {}
