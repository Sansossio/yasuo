import { registerAs } from '@nestjs/config'

export const riotConfig = registerAs('riot', () => ({
  key: process.env.RIOT_API_KEY,
  concurrency: +process.env.RIOT_CONCURRENCY || undefined,
  debug: {
    logTime: process.env.RIOT_LOG_TIME === 'true',
    logRatelimits: process.env.RIOT_LOG_RATE_LIMITS === 'true',
    logUrls: process.env.RIOT_LOG_URLS === 'true'
  },
  rateLimitRetry: process.env.RIOT_RATE_LIMIT_RETRY === 'true',
  rateLimitRetryAttempts: +process.env.RIOT_RATE_LIMIT_RETRY_ATTEMPTS
}))
