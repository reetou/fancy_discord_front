import React from 'react'
import { getDocBySlug } from "../../lib/docs";
import MarkdownContainer from "../../components/MarkdownContainer";

interface Props {
  meta: any
  content: any
}

export default function DocsMainPage({ meta, content }: Props) {
  return (
    <MarkdownContainer meta={meta} content={content} />
  )
}


export async function getStaticProps() {
  const doc = getDocBySlug('getstarted')

  return {
    props: {
      ...doc,
    }
  }
}
