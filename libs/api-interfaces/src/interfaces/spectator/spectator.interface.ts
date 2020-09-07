import { PerksDTO, BannedChampion } from 'twisted/dist/models-dto'
import { GetSummoner } from '../summoner/summoner.interface'

export interface SpectatorCurrentParticipant {
  profileIconId: number
  championId: number
  bot: boolean
  perks: PerksDTO
  spells: [number, number]
  teamId: number
  summoner: GetSummoner
}

export interface Spectator {
  gameId: number
  gameStartTime: number
  platformId: string
  gameMode: string
  mapId: number
  gameType: string
  bannedChampions: BannedChampion[]
  participants: SpectatorCurrentParticipant[]
  gameLength: number
}
