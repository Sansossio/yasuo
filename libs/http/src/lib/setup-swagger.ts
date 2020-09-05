import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

const { version } = require('../../../../package.json')

export const setupSwagger = (app: INestApplication, title: string, path: string = 'api') => {
  const options = new DocumentBuilder()
    .setTitle(title)
    .addBearerAuth()
    .setVersion(version)
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup(path, app, document)
}
