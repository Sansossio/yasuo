import { Module } from '@nestjs/common'
import { HttpModule } from '@yasuogg/http'
import { RiotGamesModule } from '@yasuogg/riot-games'
import { ConfigModule } from '@nestjs/config'
import config from '../config'

@Module({
  imports: [
    HttpModule,
    RiotGamesModule,
    ConfigModule.forRoot({
      load: config
    })
  ]
})
export class InternalModule {}
