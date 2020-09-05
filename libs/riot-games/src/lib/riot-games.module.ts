import { Module, Global } from '@nestjs/common'
import { RiotGamesService } from './service/riot-games.service'
import { ConfigModule } from '@nestjs/config'

@Global()
@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  providers: [
    RiotGamesService
  ],
  exports: [
    RiotGamesService
  ]
})
export class RiotGamesModule {}
