import Head from 'next/head' ;
import Link from 'next/link' ;

import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date' ;
import utilStyles from '../styles/utils.module.css' ;

import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';




export default function Home({ allPostsData }: {
    allPostsData: {
        date: string
        title: string
        id: string
    }[]
}) {
    return (
        <Layout home>
            <Head>
                <title>{ siteTitle }</title>                
            </Head>

            <section className={ utilStyles.headingMd }>
                <p>
                    My name is Jefferson williams. I am senior Machine Learning engineer for up to 7 years now.
                </p>
                <p>
                    (This is a sample website - you'll be building a title like this on {' '} 
                    <a href = 'https://nextjs.org/learn'>our Next.js tutorial</a>.) 
                </p>
            </section>

            <section>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    { 
                        allPostsData.map( ({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id} >
                                <Link href={ `/posts/${id}`}>
                                    <a>{ title }</a>
                                </Link>
                                <br />
                                <small>
                                    <Date dateString={ date } />
                                </small>
                            </li>
                        ) )
                    }
                </ul>
            </section>

        </Layout>
    ) ;
}


export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData() ;
    return {
        props: {
            allPostsData
        }
    }
}