import { Module, HttpModule } from '@nestjs/common'
import { LeaguesService } from './service/leagues.service'
import { DatabaseModule } from '@yasuogg/database'
import { LeagueSchema, SummonerSchema } from '@yasuogg/models'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule.forFeature([
      SummonerSchema,
      LeagueSchema
    ]),
    HttpModule
  ],
  providers: [
    LeaguesService
  ],
  exports: [
    LeaguesService
  ]
})
export class LeaguesModule {}
