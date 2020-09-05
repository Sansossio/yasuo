import { SchemaOptions } from '@nestjs/mongoose'

export const baseOptionsDocument: SchemaOptions = {
  timestamps: true,
  versionKey: false
}
