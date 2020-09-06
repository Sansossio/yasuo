import { Module } from '@nestjs/common'
import { SummonerModule } from '../summoner/summoner.module'
import { SpectatorController } from './controller/spectator.controller'
import { SpectatorService } from './service/spectator.service'

@Module({
  imports: [
    SummonerModule
  ],
  controllers: [
    SpectatorController
  ],
  providers: [
    SpectatorService
  ]
})
export class SpectatorModule {}
