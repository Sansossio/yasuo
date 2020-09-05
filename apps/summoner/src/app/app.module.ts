import { Module } from '@nestjs/common'
import { HttpModule } from '@yasuogg/http'

@Module({
  imports: [
    HttpModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
