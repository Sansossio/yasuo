import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { setupSwagger } from '@yasuogg/http'
import { AppModule } from './app/app.module'

const APP_TITLE = 'YasuoGG - Summoners'
const GLOBAL_PREFIX = 'summoner'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  app.setGlobalPrefix(GLOBAL_PREFIX)
  setupSwagger(app, APP_TITLE, `${GLOBAL_PREFIX}/api`)
  const port = process.env.PORT || 3000
  await app.listen(port)
}

bootstrap()
