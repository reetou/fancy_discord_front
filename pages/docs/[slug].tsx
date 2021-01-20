import React from 'react'
import { getAllDocs, getDocBySlug } from "../../lib/docs";
import MarkdownContainer from "../../components/MarkdownContainer";

interface Props {
  meta: any
  content: any
}

export default function DocsPage({ meta, content }: Props) {
  return (
    <MarkdownContainer meta={meta} content={content} />
  )
}


export async function getStaticProps({ params }: any) {
  const doc = getDocBySlug(params.slug)

  return {
    props: {
      ...doc,
    }
  }
}

export async function getStaticPaths() {
  const docs = getAllDocs()
  return {
    paths: docs.map(doc => {
      return {
        params: {
          slug: doc.slug
        }
      }
    }),
    fallback: false
  }
}
