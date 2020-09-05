import { Module } from '@nestjs/common'
import { InternalModule } from './internal.module'
import { SummonerModule } from './summoner/summoner.module'

@Module({
  imports: [
    InternalModule,
    SummonerModule
  ]
})
export class AppModule {}
