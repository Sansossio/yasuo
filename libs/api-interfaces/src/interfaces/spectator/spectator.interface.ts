import { PerksDTO, BannedChampion } from 'twisted/dist/models-dto'

export interface SpectatorCurrentParticipant {
  profileIconId: number
  championId: number
  summonerName: string
  bot: boolean
  perks: PerksDTO
  spell2Id: number
  teamId: number
  spell1Id: number
  summonerId: string
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
