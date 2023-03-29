import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'fireship-sanity',

  projectId: 'u1usrb1j',
  dataset: 'fireship-sanity',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
