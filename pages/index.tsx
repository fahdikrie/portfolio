import { PageProps } from 'types/pages';

import Home from 'components/containers/Home';
import Layout from '@/components/layout/RegularLayout';

const DESCRIPTION = `A personal webpage of Fahdii Ajmalal Fikrie (goes by the name Fahdii, Badi, Fahdikrie, or Dikrie). Fahdii is a 21 y/o CS student at University of Indonesia.`;

const HomePage = ({ router }: PageProps): JSX.Element => (
  <Layout
    pageDescription={DESCRIPTION}
    currentPage={router.pathname}
    pageTitle="Home"
  >
    <Home />
  </Layout>
);

export default HomePage;
