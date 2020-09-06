import { Schema } from 'mongoose'
import { SummonerLeague } from '../summoner/summoner.interface'

export interface League extends SummonerLeague {
  summoner: Schema.Types.ObjectId
}
