import Layout from './Layout'
import React from 'react'
import ReactMarkdown from "react-markdown";
// @ts-ignore
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import remarkGfm from "remark-gfm";

interface Props {
  meta: any
  content: any
}

const renderers = {
  code: ({language, value}: any) => {
    return <SyntaxHighlighter language={language} children={value} />
  }
}

export default function MarkdownContainer({ meta, content }: Props) {
  return <Layout>
    <ReactMarkdown renderers={renderers} plugins={[remarkGfm]} children={content} />
  </Layout>
}
