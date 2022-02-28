import { default as Index } from 'components/journal';
import Layout from 'components/layout';

import { getAllPosts } from 'libs/notion'
import BLOG from 'blog.config'
import { useEffect } from 'react';

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const postsToShow = posts.slice(0, BLOG.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > BLOG.postsPerPage

  return {
    props: {
      page: 1,
      postsToShow: postsToShow,
      showNext: showNext
    },
    revalidate: 1
  }
}

const Journal = ({ router, page, postsToShow, showNext }): JSX.Element => {
  useEffect(() => {
    console.log(postsToShow)
  }, [postsToShow])

  return (
    <Layout
      description="An internet-web journal of Fahdii Ajmalal Fikrie."
      currentPage={router.pathname}
      pageTitle="journal"
    >
      <Index />
    </Layout>
  );
};

export default Journal;
