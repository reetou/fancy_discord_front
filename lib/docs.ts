import matter from 'gray-matter'
import { join } from "path";
import * as fs from "fs";

const docsDirectory = join(process.cwd(), 'docs')

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(docsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { slug: realSlug, meta: data, content }
}

export function getAllDocs() {
  return [
    { slug: 'getstarted' },
    { slug: 'troubleshooting' },
    { slug: 'language-specific-requirements' },
    { slug: 'migrating' },
    { slug: 'contacts' },
  ]
}
