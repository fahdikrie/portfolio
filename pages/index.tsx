import Layout from 'components/layout';
import Home from 'components/containers/Home';

const DESCRIPTION = `
  Fahdii (or Badi) is a 20 years old sophomore student currently majoring
  CS 💻 at the University of Indonesia ‍🇮🇩 Meet Fahdii Ajmalal Fikrie! 👋

  Fahdii is very passionate when it comes to taking naps 💤 and watching
  movies 🎬 Some of his favorite movies are Good Morning (1959) 🌄 and The
  Makioka Sisters (1983) 🎎

  All the funsies aside 🎭 Fahdii is a software engineer in the making 🧑‍💻
  Having great interest in full-stack web development 🌐 He looks forward to
  be able to do big things 💯 and take part in this vast & rapid growing
  world of tech-industry 🚀
`;

const HomePage = ({ router }): JSX.Element => (
  <Layout
    description={`A web portfolio of Fahdii Ajmalal Fikrie. ${DESCRIPTION}`}
    currentPage={router.pathname}
    pageTitle="home"
  >
    <Home />
  </Layout>
);

export default HomePage;
