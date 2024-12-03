import path from "path"
import fs from 'fs'
const rootDirectory = path.join(process.cwd(), 'content', 'posts')

export async function getPostBySlug(slug: string) {
  const filePath = path.join(rootDirectory,`${slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, {encoding: 'utf8'})
  
  return (
    <div>
      
    </div>
  )
}
