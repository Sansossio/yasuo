import { ConfigService } from '@nestjs/config'
import { MongooseModuleOptions } from '@nestjs/mongoose'

export type RegisterAsyncDatabase = {
  /**
   * useFactory
   * @description Callback that returns RegisterCockroachdb instance, if is not defined, default config will be load
   */
  useFactory?: (configService: ConfigService) => {
    uri: string,
    options?: MongooseModuleOptions
  }
}
