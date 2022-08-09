import { PageProps } from 'types/pages';

import About from 'components/containers/About';
import Layout from '@/components/layout/Regular';

const DESCRIPTION =
  "A page that displays Fahdii's bio, educations, and experiences.";

const AboutPage = ({ router }: PageProps): JSX.Element => (
  <Layout
    pageDescription={DESCRIPTION}
    currentPage={router.pathname}
    pageTitle="About"
  >
    <About />
  </Layout>
);

export default AboutPage;
