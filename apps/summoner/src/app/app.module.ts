import { Module } from '@nestjs/common'
import { InternalModule } from './internal.module'
import { SummonerModule } from './summoner/summoner.module'
import { LeaguesModule } from './leagues/leagues.module'

@Module({
  imports: [
    InternalModule,
    SummonerModule,
    LeaguesModule
  ]
})
export class AppModule {}
