import { registerAs } from '@nestjs/config'

export const servicesConfig = registerAs('services', () => ({
  mmr: process.env.MMR_SERVICE_URL
}))
