import Head from 'next/head' ;

import Layout from "../../components/layout";
import Date from '../../components/date' ;
import { getAllPostIds, getpostData } from '../../lib/posts' ;
import utilStyles from '../../styles/utils.module.css' ;

import { GetStaticProps, GetStaticPaths } from 'next';


export default function Post({ postData }: {
    postData: {
        title: string
        date: string
        contentHTML: string
    }
}) {
    return (
        <Layout>
            <Head>
                <title>{ postData.title }</title>
            </Head>

            <article>
                <h1 className={ utilStyles.headingX1 }>{ postData.title }</h1>
                <div className={ utilStyles.lightText }>
                    <Date dateString={ postData.date } />
                </div>                
                <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
            </article>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds() ;
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getpostData( params.id as string ) ;
    return {
        props: {
            postData,
        },
    } ;
}