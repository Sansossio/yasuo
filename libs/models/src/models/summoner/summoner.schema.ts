import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { BaseDocument } from '../base.document'
import { Summoner } from './summoner.interface'
import { RegisterSchema } from '../../type/register-schema.type'
import { Regions } from 'twisted/dist/constants'

const SCHEMA_NAME = 'summoner'

@Schema()
export class SummonerDocument extends BaseDocument implements Summoner {
  @Prop()
  id: string

  @Prop()
  accountId: string

  @Prop()
  puuid: string

  @Prop()
  name: string

  @Prop()
  profileIconId: number

  @Prop()
  revisionDate: number

  @Prop()
  summonerLevel: number

  @Prop({
    type: 'string'
  })
  region: Regions
}

export const SummonerSchema: RegisterSchema = {
  name: SCHEMA_NAME,
  schema: SchemaFactory.createForClass(SummonerDocument)
}
