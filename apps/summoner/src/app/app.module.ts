import { Module } from '@nestjs/common'
import { InternalModule } from './internal.module'

@Module({
  imports: [
    InternalModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
