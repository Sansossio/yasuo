import { DynamicModule, Injectable } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose'
import { RegisterSchema } from '@yasuogg/models'
import { RegisterAsyncDatabase } from './type/register-async.database.type'

@Injectable()
export class DatabaseModule {
  static forFeature (entities: RegisterSchema[]) {
    return MongooseModule.forFeature(entities)
  }

  static forRoot (uri: string, options?: MongooseModuleOptions): DynamicModule {
    return MongooseModule.forRoot(uri, options)
  }

  static forRootAsync ({ useFactory }: RegisterAsyncDatabase) {
    return MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return useFactory ? useFactory(configService) : {
          uri: configService.get('database.uri')
        }
      },
      inject: [ConfigService]
    })
  }
}
