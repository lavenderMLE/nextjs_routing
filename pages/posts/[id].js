import Head from 'next/head' ;

import Layout from "../../components/layout";
import Date from '../../components/date' ;
import { getAllPostIds, getpostData } from '../../lib/posts' ;
import utilStyles from '../../styles/utils.module.css' ;


export async function getStaticProps({ params }) {
    const postData = await getpostData( params.id ) ;
    return {
        props: {
            postData,
        },
    } ;
}

export async function getStaticPaths() {
    const paths = getAllPostIds() ;
    return {
        paths,
        fallback: false,
    } ;
}

export default function Post({ postData }) {
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