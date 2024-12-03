import React from 'react'

export default async function Post({params}:{params: {slug:string}}) {
  const {slug} = params;
  const content = await getPostBySlug(slug)
  
  
  function page() {
    return (
      <div>
        
      </div>
    )
  }
  
  return (
    <div>
      
    </div>
  )
}
