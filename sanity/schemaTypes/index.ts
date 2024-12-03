import { type SchemaTypeDefinition } from 'sanity'
import contactSubmission from './contactSubmission'
import formSubmission from './formSubmission'
import teamMember from './teamMember'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contactSubmission,formSubmission,teamMember],
}
