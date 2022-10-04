import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { nextI18NextConfig } from '../next-i18next.config.mjs';

import ContactsForm from '../components/ContactsForm/ContactsForm';

const Contacts = () => {
  return (
    <ContactsForm />
  )
}

export const getStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common'], nextI18NextConfig),
    },
  };
}

export default Contacts;
