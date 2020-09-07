import { Module } from '@nestjs/common'
import { MmrController } from './controller/mmr.controller'
import { MmrService } from './service/mmr.service'

@Module({
  controllers: [
    MmrController
  ],
  providers: [
    MmrService
  ]
})
export class MmrModule {}
