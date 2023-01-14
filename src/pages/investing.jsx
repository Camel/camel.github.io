import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAVX from '@/images/logos/avx.jpeg'
import logoOPSWAT from '@/images/logos/opswat.jpeg'
import logoSheerID from '@/images/logos/sheerid.png'
import logoCoralogix from '@/images/logos/coralogix.png'
import logoFreightwaves from '@/images/logos/freightwaves.png'
import logoPathAI from '@/images/logos/pathai.png'
import logoFaliam from '@/images/logos/faliam.png'
import logoWillow from '@/images/logos/willow.jpeg'
import logoBrace from '@/images/logos/brace.png'
import logoParadox from '@/images/logos/paradox.jpeg'
import logoRadix from '@/images/logos/radix.jpg'
import logoBox from '@/images/logos/box.png'
import logoNotable from '@/images/logos/notable.png'
import logoDoctorOnDemand from '@/images/logos/doctorondemand.jpg'


const projects = [
  {
    name: 'AppViewX',
    description:
      'Security and identity in machine to machine communication',
    link: { href: 'https://appviewx.com', label: 'appviewx.com' },
    logo: logoAVX,
  },
  {
    name: 'OPSWAT',
    description:
      'Security for critical infrastructure',
    link: { href: 'https://opswat.com', label: 'opswat.com' },
    logo: logoOPSWAT,
  },
  {
    name: 'SheerID',
    description:
      'ID verification for identity marketing',
    link: { href: 'https://sheerid.com/business/', label: 'sheerid.com' },
    logo: logoSheerID,
  },
  {
    name: 'Coralogix',
    description:
      'Full-stack observability platform',
    link: { href: 'https://coralogix.com', label: 'coralogix.com' },
    logo: logoCoralogix,
  },
  {
    name: 'FreightWaves',
    description:
      'Frieght data intelligence platform',
    link: { href: 'https://freightwaves.com', label: 'freightwaves.com' },
    logo: logoFreightwaves,
  },
  {
    name: 'PathAI',
    description:
      'AI-powered pathology',
    link: { href: 'https://pathai.com', label: 'pathai.com' },
    logo: logoPathAI,
  },
  {
    name: 'Faliam',
    description:
      'B2B marketplace for dental procurement',
    link: { href: 'https://faliam.com', label: 'faliam.com' },
    logo: logoFaliam,
  },
  {
    name: 'Willow',
    description:
      'Software for performing mortgage servicing',
    link: { href: 'https://willowservicing.com', label: 'willowservicing.com' },
    logo: logoWillow,
  },
  {
    name: 'Brace',
    description:
      'Software for non-performing mortgage servicing',
    link: { href: 'https://brace.ai', label: 'brace.ai' },
    logo: logoBrace,
  },
  {
    name: 'Paradox',
    description:
      'AI-powered recruiting automation',
    link: { href: 'https://paradox.ai', label: 'paradox.ai' },
    logo: logoParadox,
  },
  {
    name: 'Radix Health',
    description:
      'Software for patient self-scheduling & intake',
    link: { href: 'https://radixhealth.com', label: 'radixhealth.com' },
    logo: logoRadix,
  },
  {
    name: 'Box',
    description:
      'Secure file sharing, storage, and collaboration',
    link: { href: 'https://box.com', label: 'box.com' },
    logo: logoBox,
  },
  {
    name: 'Notable',
    description:
      'Intelligent workflow automation for healthcare',
    link: { href: 'https://notablehealth.com', label: 'notablehealth.com' },
    logo: logoNotable,
  },
  {
    name: 'Doctor on Demand',
    description:
      'Telemedicine platform',
    link: { href: 'https://doctorondemand.com', label: 'doctorondemand.com' },
    logo: logoDoctorOnDemand,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Andrew Camel</title>
        <meta
          name="description"
          content="A collection from over the years"
        />
      </Head>
      <SimpleLayout
        title="A collection from over the years"
        intro="Seed to pre-IPO, range of deal structures"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
