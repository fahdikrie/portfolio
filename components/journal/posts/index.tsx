import { getAllPosts } from 'libs/notion'
import BLOG from 'blog.config'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const postsToShow = posts.slice(0, BLOG.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > BLOG.postsPerPage

  console.log(posts)

  return {
    props: {
      page: 1,
      postsToShow,
      showNext
    },
    revalidate: 1
  }
}

const blog = () => {
  return (
    <></>
  )
}

export default blog
