import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { setupSwagger } from '@yasuogg/http'
import { AppModule } from './app/app.module'

const APP_TITLE = 'YasuoGG - Mmr'
const GLOBAL_PREFIX = 'mmr'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  app.setGlobalPrefix(GLOBAL_PREFIX)
  setupSwagger(app, APP_TITLE, `${GLOBAL_PREFIX}/api`)
  const port = process.env.PORT || 3333
  await app.listen(port)
}

bootstrap()
