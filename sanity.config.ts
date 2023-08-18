import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity io',

  projectId: 'au0f4v4g',
  dataset: 'production',
  apiVersion: "2023-08-31",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
