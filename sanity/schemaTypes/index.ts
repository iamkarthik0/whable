import { type SchemaTypeDefinition } from 'sanity'
import contactSubmission from './contactSubmission'
import formSubmission from './formSubmission'
import teamMember from './teamMember'
import homePage from './homePage'
import aboutPage from './aboutPage'
import missionPage from './missionPage'
import donationPage from './donationPage'
import contactPage from './contactPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contactSubmission,formSubmission,teamMember,homePage,aboutPage,missionPage,donationPage,contactPage],
}
