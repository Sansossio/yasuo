import { Module } from '@nestjs/common'
import { LeaguesService } from './service/leagues.service'
import { DatabaseModule } from '@yasuogg/database'
import { LeagueSchema, SummonerSchema } from '@yasuogg/models'

@Module({
  imports: [
    DatabaseModule.forFeature([
      SummonerSchema,
      LeagueSchema
    ])
  ],
  providers: [
    LeaguesService
  ],
  exports: [
    LeaguesService
  ]
})
export class LeaguesModule {}
