import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Header from '../components/Header'
import IBM from '../components/IBM'
import Layout from '../components/Layout'

interface Props {
  data: any[]
}

const BusinessManagement: NextPage<Props> = ({ data }) => {
  const { locale } = useRouter()
  const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
  const s = strings[lang]

  return (
    <Layout locale={locale as string} title={s.title} desc={s.desc}>
      <Header locale={locale as string} title="Business Management" className="" active='business-management' />
      <IBM extended locale={locale as string} />
    </Layout>
  )
}

const strings = {
  'en': {
    'title': 'Business Management, ISMATECH',
    'desc': 'Business Management, ISMATECH',
    'subtitle': '',
    'contact': 'BusinessManagement us',
    'form': 'BusinessManagement form',
    'name': 'Full name',
    'phone': 'Phone number',
    'email': 'Email address',
    'message': 'Message',
    'getInTouch': 'get in touch',
    'fillForm': "Fill in the form to start a conversation",
    subject: "Suject",
    subjects: ["website", "Mobile application", "Website and mobile application", "Wordpress", "Entreprise", "Intenships", "Something else"]
  },
  'fr': {
    'title': 'Business Management, ISMATECH',
    'desc': 'Business Management, ISMATECH',
    'subtitle': '',
    'contact': 'Contactez-nous',
    'form': 'Formulaire de contact',
    'name': 'Nom complet',
    'phone': 'Numéro de téléphone',
    'email': 'Adresse courriel',
    'message': 'Message',
    'getInTouch': 'contactez-nous',
    'fillForm': "Veuillez remplir le formulaire",
    subject: "Sujet",
    subjects: ["Site internet", "Application mobile", "Site internet et application mobile", "Wordpress", "Entreprise", "Stages", "Autres"]
  },
}


export const getStaticProps: GetStaticProps = async (context) => {
  const data: any[] = []
  return {
    props: { data }
  };
}


export default BusinessManagement