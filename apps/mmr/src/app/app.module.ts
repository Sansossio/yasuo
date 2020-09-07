import { Module } from '@nestjs/common'
import { MmrModule } from './mmr/mmr.module'

@Module({
  imports: [
    MmrModule
  ]
})
export class AppModule {}
