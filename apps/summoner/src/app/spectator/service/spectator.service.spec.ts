import { SpectatorService } from './spectator.service'
import { Regions } from 'twisted/dist/constants'
import { NotFoundException } from '@nestjs/common'

describe('Spectator service', () => {
  const spectatorApi = {
    activeGame: jest.fn()
  }
  const riotApi = {
    getLolApi: () => ({
      Spectator: spectatorApi
    })
  }
  const summonerService = {
    getByName: jest.fn()
  }
  const service = new SpectatorService(
    summonerService as any,
    riotApi as any
  )
  const params = {
    summonerName: 'Test',
    region: Regions.AMERICA_NORTH
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should throw NotFoundException when summoner does not exists', async () => {
    summonerService.getByName.mockImplementation(() => Promise.resolve(null))

    await expect(service.spectator(params)).rejects.toBeInstanceOf(NotFoundException)
  })

  it('should throw NotFoundException when summoner does not have an active game (property message into activeGame response)', async () => {
    summonerService.getByName.mockImplementation(() => Promise.resolve({
      ids: {}
    }))
    spectatorApi.activeGame.mockImplementation(() => ({
      message: 'Not found'
    }))

    await expect(service.spectator(params)).rejects.toBeInstanceOf(NotFoundException)
  })
})
