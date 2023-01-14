
import Head from 'next/head'
import Link from 'next/link'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  LinkedInIcon
} from '@/components/SocialIcons'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'


function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/posts/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read post</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}



export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Andrew Camel
        </title>
        <meta
          name="description"
          content="."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Andrew Camel
          </h2>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Investing at OpenView. Prev: Brighton Park, 8VC, General Atlantic.
            <br/><br/>
            <a href='/posts' className='underline hover:text-teal-500'>Writing</a> at the insection of emerging tech, business models, and investing.
            <br/><br/>
            <a href='/investing' className='underline hover:text-teal-500'>Investing</a> in B2B SaaS. Focused on applied ML, infra, cyber, vertical SaaS. Venture + growth + buyouts.
            <br/><br/>
            Based in NYC. 
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.twitter.com/andrewccamel"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/andrewcamel/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-12 md:mt-16">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
