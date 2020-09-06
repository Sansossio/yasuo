import { Module } from '@nestjs/common'
import { LeaguesService } from './service/leagues.service'

@Module({
  providers: [
    LeaguesService
  ],
  exports: [
    LeaguesService
  ]
})
export class LeaguesModule {}
