import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Header from '../components/Header'
import IPM from '../components/IPM'
import Layout from '../components/Layout'

interface Props {
  data: any[]
}

const ProjectsManagement: NextPage<Props> = ({ data }) => {
  const { locale } = useRouter()
  const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
  const s = strings[lang]

  return (
    <Layout locale={locale as string} title={s.title} desc={s.desc}>
      <Header locale={locale as string} title="Projects Management" className="bg-[url(https://source.unsplash.com/xhGMQ_nYWqU/1280x)]" active='projects-management' />
      <IPM locale={locale as string} />
    </Layout>
  )
}

const strings = {
  'en': {
    'title': 'Projects Management, ISMATECH',
    'desc': 'Projects Management, ISMATECH',
    'subtitle': '',
    'contact': 'ProjectsManagement us',
    'form': 'ProjectsManagement form',
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
    'title': 'Projects Management, ISMATECH',
    'desc': 'Projects Management, ISMATECH',
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


export default ProjectsManagement