import { registerAs } from '@nestjs/config'

export const riotConfig = registerAs('riot', () => ({
  key: process.env.RIOT_API_KEY,
  concurrency: +process.env.RIOT_CONCURRENCY || undefined,
  debug: process.env.RIOT_DEBUG === 'true',
  rateLimitRetry: process.env.RIOT_RATE_LIMIT_RETRY === 'true',
  rateLimitRetryAttempts: +process.env.RIOT_RATE_LIMIT_RETRY_ATTEMPTS
}))
