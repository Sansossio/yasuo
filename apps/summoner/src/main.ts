import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { setupSwagger } from '@yasuogg/http'
import { AppModule } from './app/app.module'

const APP_TITLE = 'YasuoGG - Summoners'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  setupSwagger(app, APP_TITLE)
  const port = process.env.PORT || 3000
  await app.listen(port)
}

bootstrap()
