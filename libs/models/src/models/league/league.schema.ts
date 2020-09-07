import * as mongoose from 'mongoose'
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose'
import { BaseDocument } from '../base.document'
import { RegisterSchema } from '../../type/register-schema.type'
import { baseOptionsDocument } from '../base-options.document'
import { League } from './league.interface'

const SCHEMA_NAME = 'leagues'

@Schema(baseOptionsDocument)
export class LeagueDocument extends BaseDocument implements League {
  @Prop({
    type: mongoose.Schema.Types.ObjectId
  })
  summoner: mongoose.Schema.Types.ObjectId

  @Prop()
  queueType: string

  @Prop()
  hotStreak: boolean

  @Prop()
  wins: number

  @Prop()
  veteran: boolean

  @Prop()
  losses: number

  @Prop()
  rank: string

  @Prop()
  leagueId: string

  @Prop()
  inactive: boolean

  @Prop()
  freshBlood: boolean

  @Prop()
  tier: string

  @Prop()
  leaguePoints: number

  @Prop()
  mmr: number
}

export const LeagueSchema: RegisterSchema = {
  name: SCHEMA_NAME,
  schema: SchemaFactory.createForClass(LeagueDocument)
}
